import { encode } from '@toon-format/toon';

/**
 * Formats retrieval results as TOON for efficient LLM consumption.
 * This utility encapsulates the formatting logic (ID assignment, score rounding)
 * that's specific to our RAG context format.
 */
export function formatRetrievalContext(
  results: Array<{
    text: string;
    score: number;
    metadata?: Record<string, any>;
  }>
): string {
  const contextData = {
    chunks: results.map((r, i) => ({
      id: i + 1,
      text: r.text,
      score: Math.round(r.score * 100) / 100,
    })),
  };
  
  return encode(contextData);
}