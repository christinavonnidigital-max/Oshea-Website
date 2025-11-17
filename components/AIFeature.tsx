
import * as React from 'react';
import type { FC, FormEvent } from 'react';
import { generateContent } from '../services/geminiService';
import type { GeminiResponse, GroundingChunk } from '../types';
import ChatIcon from './icons/ChatIcon';
import CloseIcon from './icons/CloseIcon';
import SendIcon from './icons/SendIcon';

interface Message {
  text: string;
  sender: 'user' | 'ai';
  sources?: GroundingChunk[];
}

const brochureContext = `You are a helpful and friendly AI assistant for O'Shea SA. Your purpose is to answer questions about ISO standards and the services offered by O'Shea SA. Use the following information about O'Shea SA in your answers.
**About O'Shea SA:**
- **Company:** O'Shea SA, a provider of Management Systems Certification, Inspection, Testing, and Training Services.
- **Partner:** We are a Cooperation Partner of TÜV NORD CERT GmbH.
- **Mission:** We deliver independent, impartial, and internationally recognized services to help businesses in Sub Sahara Africa meet regulatory requirements and achieve global standards.
- **Services We Offer:**
  - **Management Systems Certification for standards including:** ISO 9001 (Quality Management), ISO 14001 (Environmental Management), ISO 45001 (Occupational Health & Safety), ISO 22000 (Food Safety), ISO 27001 (Information Security), ISO 50001 (Energy Management), FSSC 22000 (Food Safety), and HACCP.
  - **Inspection Services:** Including pre-shipment inspections and factory audits.
  - **Training Services:** ISO standard Lead Auditor, internal auditor, and awareness training.
- **Industries Served:** Manufacturing, Construction & Engineering, Food & Beverage, Energy & Utilities, IT, Healthcare, Logistics, and Mining.
Your tone should be professional, concise, and helpful. When asked about standards not on the list, you can provide general information using your knowledge and web search, but clarify that the user should contact O'Shea SA directly to confirm service availability.`;

const AIFeature: FC = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [prompt, setPrompt] = React.useState<string>('');
  const [messages, setMessages] = React.useState<Message[]>([
    { sender: 'ai', text: "Hello! How can I help you with ISO standards or O'Shea SA's services today?" }
  ]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const messagesEndRef = React.useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  React.useEffect(scrollToBottom, [messages]);

  const handleSubmit = React.useCallback(async (e: FormEvent) => {
    e.preventDefault();
    if (!prompt.trim() || isLoading) return;

    const userMessage: Message = { text: prompt, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setPrompt('');
    setIsLoading(true);

    try {
      const result = await generateContent(prompt, brochureContext);
      const aiMessage: Message = {
        text: result.text.startsWith('Error:') ? "Sorry, I encountered an error. Please try again." : result.text,
        sender: 'ai',
        sources: result.candidates?.[0]?.groundingMetadata?.groundingChunks?.filter(c => c.web) || []
      };
      setMessages(prev => [...prev, aiMessage]);
    } catch (err) {
      const errorMessage: Message = {
        text: "Sorry, I couldn't connect to the AI service.",
        sender: 'ai'
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  }, [prompt, isLoading]);

  return (
    <>
      <div className={`fixed bottom-24 right-5 sm:right-10 w-[calc(100%-2.5rem)] sm:w-96 bg-white rounded-lg shadow-2xl z-50 transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
        <div className="flex justify-between items-center p-4 bg-[#0F1A3E] text-white rounded-t-lg">
          <h3 className="font-bold text-lg">O'Shea AI Assistant</h3>
          <button onClick={() => setIsOpen(false)} className="hover:opacity-75">
            <CloseIcon />
          </button>
        </div>
        
        <div className="h-80 overflow-y-auto p-4 space-y-4">
          {messages.map((msg, index) => (
            <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-xs lg:max-w-sm rounded-lg px-4 py-2 ${msg.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}>
                <p className="whitespace-pre-wrap">{msg.text}</p>
                 {msg.sources && msg.sources.length > 0 && (
                    <div className="mt-2 pt-2 border-t border-gray-300">
                        <h4 className="text-xs font-semibold mb-1">Sources:</h4>
                        <ul className="list-disc list-inside space-y-1">
                            {msg.sources.map((chunk, i) => (
                               chunk.web && <li key={i}>
                                    <a href={chunk.web.uri} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm">
                                        {chunk.web.title || chunk.web.uri}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                  )}
              </div>
            </div>
          ))}
           {isLoading && (
            <div className="flex justify-start">
                <div className="bg-gray-200 text-gray-800 rounded-lg px-4 py-2 flex items-center space-x-2">
                    <span className="h-2 w-2 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                    <span className="h-2 w-2 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                    <span className="h-2 w-2 bg-gray-500 rounded-full animate-bounce"></span>
                </div>
            </div>
           )}
          <div ref={messagesEndRef} />
        </div>
        
        <form onSubmit={handleSubmit} className="p-4 border-t flex items-center">
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Ask a question..."
            className="flex-grow p-2 border rounded-l-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            disabled={isLoading}
          />
          <button type="submit" className="bg-gradient-to-r from-orange-500 to-red-600 text-white p-2 rounded-r-md disabled:opacity-50" disabled={isLoading}>
            <SendIcon />
          </button>
        </form>
      </div>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-5 right-5 sm:right-10 h-16 w-16 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-full shadow-2xl flex items-center justify-center z-50 transform hover:scale-110 transition-transform"
        aria-label="Toggle AI Assistant"
      >
        {isOpen ? <CloseIcon /> : <ChatIcon />}
      </button>
    </>
  );
};

export default AIFeature;