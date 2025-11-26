import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

const GeminiQA: React.FC = () => {
  const [query, setQuery] = useState('');
  const [answer, setAnswer] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [aiClient, setAiClient] = useState<GoogleGenAI | null>(null);

  useEffect(() => {
    // Initialize client if API key is present
    if (process.env.API_KEY) {
      setAiClient(new GoogleGenAI({ apiKey: process.env.API_KEY }));
    }
  }, []);

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim() || !aiClient) return;

    setIsLoading(true);
    setAnswer('');

    try {
      const response = await aiClient.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: query,
        config: {
          systemInstruction: "You are a helpful, professional corporate assistant for O'Shea SA. O'Shea SA acts as a cooperation partner of TÜV NORD CERT GmbH in Sub-Saharan Africa. We provide Management Systems Certification (ISO 9001, ISO 14001, etc.), Inspection, Testing, and Training services. Answer questions briefly, professionally, and politely. If you don't know specific company details, ask the user to contact support at info@oshea.co.za."
        }
      });
      
      setAnswer(response.text || 'I apologize, but I could not generate a response at this time.');
    } catch (error) {
      console.error('Error asking Gemini:', error);
      setAnswer('Sorry, I encountered an error while processing your request. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="qa" className="py-20 bg-blue-900 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="w-96 h-96 bg-white rounded-full blur-3xl absolute -top-20 -right-20"></div>
        <div className="w-64 h-64 bg-blue-400 rounded-full blur-3xl absolute bottom-0 left-0"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Have questions about our services?</h2>
          <p className="text-blue-200 text-lg">Ask our AI assistant about certifications, inspections, or training.</p>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/20">
          <form onSubmit={handleAsk} className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="e.g., What ISO certifications do you offer?"
              className="flex-1 px-6 py-4 rounded-xl bg-white/90 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-inner"
            />
            <button 
              type="submit" 
              disabled={isLoading || !query.trim()}
              className={`px-8 py-4 rounded-xl font-bold shadow-lg transition-all duration-200 flex items-center justify-center gap-2
                ${isLoading || !query.trim() 
                  ? 'bg-gray-500 cursor-not-allowed text-gray-300' 
                  : 'bg-blue-500 hover:bg-blue-400 text-white hover:shadow-blue-500/50'}`}
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Thinking...
                </>
              ) : (
                <>Ask AI ✨</>
              )}
            </button>
          </form>

          {answer && (
            <div className="mt-8 bg-white/95 text-gray-800 p-6 rounded-xl shadow-lg animate-fade-in">
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-lg">🤖</div>
                <div className="prose prose-blue max-w-none">
                  <p className="leading-relaxed">{answer}</p>
                </div>
              </div>
            </div>
          )}
        </div>
        
        {!process.env.API_KEY && (
           <p className="text-center mt-4 text-red-300 bg-red-900/50 p-2 rounded border border-red-500/50">
             ⚠️ API Key missing. AI features are disabled in preview.
           </p>
        )}
      </div>
    </section>
  );
};

export default GeminiQA;