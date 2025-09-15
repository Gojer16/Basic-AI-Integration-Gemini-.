import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
dotenv.config();

const api_key = process.env.GEMINI_API_KEY

if (!api_key) {
  throw new Error(`Missing GEMINI API KEY Environment Variable!.`)
}

const ai = new GoogleGenAI({apiKey: api_key});

// Define a complex logic puzzle as the prompt.
const prompt = `Alice, Bob, and Carol each live in a different house on the same
street: red, green, and blue. The person who lives in the red house owns a cat.
Bob does not live in the green house. Carol owns a dog. The green house is to
the left of the red house. Alice does not own a cat. Who lives in each house,
and what pet do they own?`;

// Variables to store thoughts and answer separately.
let thoughts = "";
let answer = "";

/**
 * Main function demonstrating streaming with thoughts
 * This example uses a complex logic puzzle and processes the streaming response
 * to separate thoughts from the final answer in real-time
 */
async function main() {
  // Use streaming to get thoughts and answer in real-time.
  const response = await ai.models.generateContentStream({
    model: "gemini-2.5-pro",
    contents: prompt,
    config: {
      thinkingConfig: {
        // Include the model's thought process in the response.
        includeThoughts: true,
      },
    },
  });

  // Process each chunk as it arrives.
  for await (const chunk of response) {
    // Process each part in the chunk.
    for (const part of chunk.candidates[0].content.parts) {
      // Skip parts without text
      if (!part.text) {
        continue;
      } 
      // Check if this part is a thought.
      else if (part.thought) {
        // Print header only for the first thought.
        if (!thoughts) {
          console.log("Thoughts summary:");
        }
        // Print and accumulate thoughts.
        console.log(part.text);
        thoughts = thoughts + part.text;
      } 
      // Otherwise it's part of the answer.
      else {
        // Print header only for the first answer part.
        if (!answer) {
          console.log("Answer:");
        }
        // Print and accumulate answer.
        console.log(part.text);
        answer = answer + part.text;
      }
    }
  }
}

// Execute the main function.
await main();