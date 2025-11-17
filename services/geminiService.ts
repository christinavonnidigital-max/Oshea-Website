
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { GeminiResponse } from '../types';

if (!process.env.API_KEY) {
  throw new Error("API_KEY environment variable is not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function generateContent(
  prompt: string,
  systemInstruction: string
): Promise<GeminiResponse> {
  const modelName = 'gemini-flash-lite-latest';
  
  const config: any = {
    systemInstruction,
    tools: [{ googleSearch: {} }],
  };

  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: modelName,
      contents: prompt,
      config: config,
    });
    
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
