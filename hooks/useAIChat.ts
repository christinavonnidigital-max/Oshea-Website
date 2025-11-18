import { useState, useCallback } from 'react';
import { generateContent } from '../services/geminiService';
import { GeminiResponse, Message } from '../types';

export function useAIChat(systemInstruction: string) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = useCallback(async (prompt: string) => {
    if (!prompt.trim()) return;

    const userMessage: Message = { text: prompt, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    try {
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
      console.error("Error calling Gemini API in useAIChat hook:", err);
      const errorMessage: Message = {
        text: "Sorry, I couldn't process your request at the moment. Please try again later.",
        sender: 'ai'
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  }, [systemInstruction]);

  return { messages, isLoading, sendMessage, setMessages };
}
