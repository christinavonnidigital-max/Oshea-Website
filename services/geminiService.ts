
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { GeminiResponse } from '../types';

if (!process.env.API_KEY) {
  throw new Error("API_KEY environment variable is not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function generateContent(
  prompt: string,
  isDeepDive: boolean
): Promise<GeminiResponse> {
  const modelName = isDeepDive ? 'gemini-2.5-pro' : 'gemini-flash-lite-latest';
  
  const config: any = isDeepDive 
    ? {
        thinkingConfig: { thinkingBudget: 32768 },
        tools: [{ googleSearch: {} }],
      }
    : {
        tools: [{ googleSearch: {} }],
      };

  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: modelName,
      contents: prompt,
      config: config,
    });
    
    // The GeminiResponse type is a simplified version of GenerateContentResponse for our app's needs.
    const result: GeminiResponse = {
      text: response.text,
      candidates: response.candidates?.map(c => ({
        ...c,
        groundingMetadata: c.groundingMetadata
      }))
    };
    
    return result;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    if (error instanceof Error) {
        return { text: `Error: ${error.message}` };
    }
    return { text: "An unknown error occurred." };
  }
}
