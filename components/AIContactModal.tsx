import { useEffect, useRef, useState, type FC, FormEvent } from 'react';
import { useAIChat } from '../hooks/useAIChat';
import SendIcon from './icons/SendIcon';
import CloseIcon from './icons/CloseIcon';

interface AIContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirmSubmit: () => void;
  initialMessage: string;
}

const AIContactModal: FC<AIContactModalProps> = ({ isOpen, onClose, onConfirmSubmit, initialMessage }) => {
  const systemInstruction = `A user is about to send a message to the O'Shea SA team. The message is: "${initialMessage}". Your role is to act as a helpful AI assistant. You can clarify their query, provide immediate answers if available, or offer links to relevant pages on the website. Keep your answers concise and helpful. End your response by reminding them they can still send their original message to the team if they wish.`;
  
  const { messages, isLoading, sendMessage, setMessages } = useAIChat(systemInstruction);
  const [prompt, setPrompt] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const initialMessageSent = useRef(false);

  useEffect(() => {
    if (isOpen && !initialMessageSent.current && initialMessage) {
      const introMessage = { sender: 'ai' as const, text: "Thanks for your message! I'm O'Shea's AI assistant. I'll review your query and see if I can help you right away. One moment..." };
      setMessages([introMessage]);
      sendMessage(initialMessage);
      initialMessageSent.current = true;
    }
    
    if (!isOpen) {
      initialMessageSent.current = false;
      setMessages([]);
    }
  }, [isOpen, initialMessage, sendMessage, setMessages]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  if (!isOpen) return null;

  const handleChatSubmit = (e: FormEvent) => {
    e.preventDefault();
    sendMessage(prompt);
    setPrompt('');
  };

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-60"
      role="dialog"
      aria-modal="true"
      aria-labelledby="ai-modal-title"
    >
      <div className="bg-white rounded-lg shadow-xl w-full max-w-lg mx-4 flex flex-col h-[90vh] max-h-[700px]">
        <header className="flex justify-between items-center p-4 border-b">
          <h2 id="ai-modal-title" className="text-lg font-bold text-[#0F1A3E]">AI Assistant</h2>
          <button onClick={onClose} aria-label="Close AI Assistant" className="p-1 rounded-full text-gray-500 hover:text-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500">
            <CloseIcon />
          </button>
        </header>
        
        <div className="flex-grow overflow-y-auto p-4 space-y-4">
          {messages.map((msg, index) => (
            <div key={index} className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}>
              <div className={`max-w-xs lg:max-w-sm rounded-lg px-4 py-2 ${msg.sender === 'user' ? 'bg-gray-200 text-gray-800' : 'bg-[#0F1A3E] text-white'}`}>
                <p className="whitespace-pre-wrap">{msg.text}</p>
              </div>
              {msg.sources && msg.sources.length > 0 && (
                <div className="mt-2 text-xs text-gray-500 max-w-xs">
                  <p className="font-semibold mb-1">Sources:</p>
                  <ul className="list-disc pl-4">
                    {msg.sources.map((source, i) => (
                      <li key={i} className="truncate">
                        <a href={source.uri} target="_blank" rel="noopener noreferrer" className="hover:underline">{source.title || new URL(source.uri).hostname}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
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

        <form onSubmit={handleChatSubmit} className="p-4 border-t flex items-center">
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Ask a follow-up question..."
            aria-label="Ask a follow-up question"
            className="flex-grow p-2 border rounded-l-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            disabled={isLoading}
          />
          <button 
            type="submit" 
            aria-label="Send message"
            className="bg-gradient-to-r from-orange-500 to-red-600 text-white p-2 rounded-r-md disabled:opacity-50 flex items-center justify-center h-[42px] w-[42px] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-orange-500"
            disabled={isLoading || !prompt.trim()}
          >
            <SendIcon />
          </button>
        </form>

        <footer className="p-4 border-t bg-gray-50 flex flex-col sm:flex-row justify-between items-center gap-4 rounded-b-lg">
          <p className="text-xs text-gray-500 text-center sm:text-left">Need more help? Send your original message to our team.</p>
          <div className="flex gap-4">
             <button onClick={onClose} className="px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors text-sm font-semibold">Cancel</button>
             <button onClick={onConfirmSubmit} className="px-4 py-2 rounded-md bg-[#0F1A3E] text-white hover:bg-[#172552] transition-colors text-sm font-semibold">Send Original Message</button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default AIContactModal;
