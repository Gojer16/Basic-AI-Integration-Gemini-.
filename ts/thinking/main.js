import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
dotenv.config();

// Load API key from environment variables.
const api_key = process.env.GEMINI_API_KEY

// Check if API key is provided.
if (!api_key) {
  throw new Error(`Missing GEMINI API KEY Environment Variable!.`)
}

// Initialize the Google Generative AI client.
const ai = new GoogleGenAI({apiKey: api_key});

/**
 * Main function demonstrating the use of includeThoughts parameter.
 * This example asks for a mathematical calculation and shows how to separate.
 * the model's thoughts from the final answer
 */
async function main() {
  // Request the sum of first 50 prime numbers with thoughts included.
  const response = await ai.models.generateContent({
    model: "gemini-2.5-pro",
    contents: "What is the sum of the first 50 prime numbers?",
    config: {
      thinkingConfig: {
        // Include the model's thought process in the response.
        includeThoughts: true,
      },
    },
  });

  // Process each part of the response.
  for (const part of response.candidates[0].content.parts) {
    // Skip parts without text.
    if (!part.text) {
      continue;
    }
    // Check if this part is a thought.
    else if (part.thought) {
      console.log("Thoughts summary:");
      console.log(part.text);
    }
    // Otherwise it's part of the answer.
    else {
      console.log("Answer:");
      console.log(part.text);
    }
  }
}

// Execute the main function.
main();