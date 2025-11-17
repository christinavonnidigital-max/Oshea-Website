
export interface GroundingChunk {
  web?: {
    uri: string;
    title: string;
  };
}

export interface GroundingMetadata {
  groundingChunks: GroundingChunk[];
}

export interface GeminiCandidate {
  groundingMetadata?: GroundingMetadata;
}

export interface GeminiResponse {
  text: string;
  candidates?: GeminiCandidate[];
}
