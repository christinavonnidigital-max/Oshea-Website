import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { GeminiResponse } from "../types";

let ai: GoogleGenAI | null = null;

// Safely read the API key without crashing in the browser
let apiKey: string | undefined;

if (typeof process !== "undefined" && process.env) {
  // FIX: Per guidelines, API key must be obtained exclusively from process.env.API_KEY.
  apiKey = process.env.API_KEY;
}

if (apiKey) {
  ai = new GoogleGenAI({ apiKey });
}

export async function generateContent(
  prompt: string,
  systemInstruction: string
): Promise<GeminiResponse> {
  if (!ai) {
    // No key configured, don't crash the app, just return an error message
    return {
      text:
        "Error: AI key is not configured in this environment. The website will still work, but the AI assistant is disabled.",
    };
  }

  const modelName = "gemini-flash-lite-latest";

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
      // FIX: Per guidelines, the .text property on GenerateContentResponse should be used to get the text output.
      text: response.text,
      candidates: response.candidates?.map((c: any) => ({
        ...c,
        groundingMetadata: c.groundingMetadata,
      })),
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
