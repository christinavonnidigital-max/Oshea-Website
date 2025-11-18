import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { GeminiResponse } from "../types";

const apiKey = process.env.API_KEY;
let ai: GoogleGenAI | null = null;

if (apiKey) {
  ai = new GoogleGenAI({ apiKey });
} else {
  // This warning will appear in the browser's developer console.
  console.warn("API_KEY environment variable not set. AI assistant is disabled.");
}

export async function generateContent(
  prompt: string,
  systemInstruction: string
): Promise<GeminiResponse> {
  if (!ai) {
    return {
      text: "Error: AI key is not configured. The AI assistant is disabled.",
    };
  }

  const modelName = "gemini-2.5-flash"; // Recommended model for basic Q&A tasks.

  const config = {
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
      candidates: response.candidates?.map((c) => ({
        groundingMetadata: c.groundingMetadata,
      })),
    };

    return result;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    if (error instanceof Error) {
      return { text: `Sorry, there was an error processing your request: ${error.message}` };
    }
    return { text: "Error: An unknown error occurred while calling the AI service." };
  }
}
