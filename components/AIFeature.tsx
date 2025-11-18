import { useState, useRef, useEffect, useCallback } from 'react';
import type { FC, FormEvent } from 'react';
import { generateContent } from '../services/geminiService';
import { GeminiResponse } from '../types';

// Simple icons as components for now, marked as decorative for accessibility.
const ChatIcon: FC = () => (
  <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2Z"/>
  </svg>
);

const CloseIcon: FC = () => (
  <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"/>
  </svg>
);

const SendIcon: FC = () => (
  <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
  </svg>
);

interface Message {
  text: string;
  sender: 'user' | 'ai';
  sources?: { uri: string; title: string; }[];
}

const AIFeature: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { sender: 'ai', text: "Hello! How can I help you with ISO standards or O'Shea SA's services today?" }
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatToggleButtonRef = useRef<HTMLButtonElement>(null);
  const chatWindowRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Handle focus trapping and keyboard navigation for the modal
  useEffect(() => {
    const chatToggleButton = chatToggleButtonRef.current;
    if (isOpen) {
      inputRef.current?.focus();

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setIsOpen(false);
          return;
        }

        if (e.key === 'Tab') {
          const focusableElements = chatWindowRef.current?.querySelectorAll<HTMLElement>(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          if (!focusableElements || focusableElements.length === 0) return;

          const firstElement = focusableElements[0];
          const lastElement = focusableElements[focusableElements.length - 1];

          if (e.shiftKey) { // Shift+Tab
            if (document.activeElement === firstElement) {
              lastElement.focus();
              e.preventDefault();
            }
          } else { // Tab
            if (document.activeElement === lastElement) {
              firstElement.focus();
              e.preventDefault();
            }
          }
        }
      };
      
      document.addEventListener('keydown', handleKeyDown);
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
        chatToggleButton?.focus();
      };
    }
  }, [isOpen]);

  const handleSubmit = useCallback(async (e: FormEvent) => {
    e.preventDefault();
    if (!prompt.trim() || isLoading) return;

    const userMessage: Message = { text: prompt, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setPrompt('');
    setIsLoading(true);

    try {
      const systemInstruction = `You are O'Shea AI, an expert assistant for O'Shea SA. Your purpose is to answer questions about the company's services (Certification, Inspection, Training), the industries they serve, and relevant ISO standards. Be helpful, professional, and concise. Your knowledge cutoff is 2024. Use Google Search grounding to provide the most up-to-date information.`;
      const response: GeminiResponse = await generateContent(prompt, systemInstruction);
      
      const aiMessage: Message = {
        text: response.text,
        sender: 'ai',
        sources: response.candidates?.[0]?.groundingMetadata?.groundingChunks
          ?.map(chunk => chunk.web)
          .filter((web): web is { uri: string; title: string; } => !!web) ?? []
      };
      setMessages(prev => [...prev, aiMessage]);
    } catch (err) {
      console.error("Error calling Gemini API in AIFeature:", err);
      const errorMessage: Message = {
        text: "Sorry, I couldn't process your request at the moment. Please try again later.",
        sender: 'ai'
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  }, [prompt, isLoading]);

  return (
    <>
      <div
        ref={chatWindowRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="ai-chat-title"
        className={`fixed bottom-24 right-5 sm:right-10 w-[calc(100%-2.5rem)] sm:w-96 bg-white rounded-lg shadow-2xl z-50 transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
      >
        <div className="flex justify-between items-center p-4 bg-[#0F1A3E] text-white rounded-t-lg">
          <h3 id="ai-chat-title" className="font-bold text-lg">O'Shea AI Assistant</h3>
          <button 
            onClick={() => setIsOpen(false)} 
            className="hover:opacity-75 p-1 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-white" 
            aria-label="Close AI Assistant"
          >
            <CloseIcon />
          </button>
        </div>
        
        <div role="log" aria-live="polite" className="h-80 overflow-y-auto p-4 space-y-4">
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
        
        <form onSubmit={handleSubmit} className="p-4 border-t flex items-center">
          <input
            ref={inputRef}
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Ask a question..."
            aria-label="Ask a question"
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
      </div>

      <button
        ref={chatToggleButtonRef}
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        className="fixed bottom-5 right-5 sm:right-10 h-16 w-16 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-full shadow-2xl flex items-center justify-center z-50 transform hover:scale-110 transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white"
        aria-label="Toggle AI Assistant"
      >
        {isOpen ? <CloseIcon /> : <ChatIcon />}
      </button>
    </>
  );
};

export default AIFeature;