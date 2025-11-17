
import React, { useState, useCallback } from 'react';
import { generateContent } from '../services/geminiService';
import type { GeminiResponse, GroundingChunk } from '../types';

const AIFeature: React.FC = () => {
  const [prompt, setPrompt] = useState<string>('');
  const [isDeepDive, setIsDeepDive] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [response, setResponse] = useState<GeminiResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setIsLoading(true);
    setResponse(null);
    setError(null);

    try {
      const result = await generateContent(prompt, isDeepDive);
      if (result.text.startsWith('Error:')) {
          setError(result.text);
          setResponse(null);
      } else {
          setResponse(result);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unexpected error occurred.');
    } finally {
      setIsLoading(false);
    }
  }, [prompt, isDeepDive]);

  const sources = response?.candidates?.[0]?.groundingMetadata?.groundingChunks?.filter(c => c.web) || [];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#0F1A3E]">Ask Our AI Assistant</h2>
          <p className="mt-4 text-lg text-gray-600">Get instant, up-to-date answers to your questions about certification, standards, and industry compliance.</p>
        </div>
        
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit}>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="e.g., What are the key changes in ISO 9001:2015?"
              className="w-full p-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition duration-150 ease-in-out"
              rows={4}
              disabled={isLoading}
            />
            <div className="flex items-center justify-between mt-4 flex-wrap gap-4">
              <div className="flex items-center space-x-3">
                <label htmlFor="deep-dive-toggle" className="text-sm font-medium text-gray-700">Quick Answer</label>
                <button
                  type="button"
                  onClick={() => setIsDeepDive(!isDeepDive)}
                  className={`relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 ${isDeepDive ? 'bg-[#0F1A3E]' : 'bg-gray-300'}`}
                  aria-pressed={isDeepDive}
                  id="deep-dive-toggle"
                >
                  <span
                    aria-hidden="true"
                    className={`inline-block h-5 w-5 rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200 ${isDeepDive ? 'translate-x-5' : 'translate-x-0'}`}
                  />
                </button>
                <label htmlFor="deep-dive-toggle" className="text-sm font-medium text-gray-700">Deep Dive</label>
              </div>

              <button 
                type="submit"
                disabled={isLoading}
                className="px-6 py-2 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-md hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Thinking...' : 'Get Answer'}
              </button>
            </div>
          </form>

          {isLoading && (
            <div className="mt-6 text-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500 mx-auto"></div>
                <p className="mt-2 text-gray-600">Fetching the latest information...</p>
            </div>
          )}
          {error && <div className="mt-6 p-4 bg-red-100 text-red-700 border border-red-200 rounded-md">{error}</div>}
          
          {response && (
            <div className="mt-8 pt-6 border-t">
              <h3 className="text-2xl font-semibold text-[#0F1A3E] mb-4">Response</h3>
              <div className="prose max-w-none text-gray-700 whitespace-pre-wrap">{response.text}</div>
              
              {sources.length > 0 && (
                <div className="mt-6">
                    <h4 className="text-lg font-semibold text-[#0F1A3E] mb-2">Sources:</h4>
                    <ul className="list-disc list-inside space-y-1">
                        {sources.map((chunk, index) => (
                           chunk.web && <li key={index}>
                                <a href={chunk.web.uri} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                    {chunk.web.title || chunk.web.uri}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AIFeature;
