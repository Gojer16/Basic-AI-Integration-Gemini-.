import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
dotenv.config();

// Load API key from environment variables.
const api_key = process.env.GEMINI_API_KEY

// Check if API key is provided.
if (!api_key) {
  throw new Error(`Missing GEMINI API KEY Environment Variable!.`)
}

const ai = new GoogleGenAI({apiKey: api_key});

/**
 * Main function demonstrating the use of thinkingBudget parameter.
 * This example asks for famous physicists and their contributions.
 * thinkingBudget controls how much "thinking" the model does:
 * - 1024: Enable thinking with a specific budget.
 * - 0: Disable thinking.
 * - -1: Enable dynamic thinking.
 */
async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-pro",
    contents: "Provide a list of 3 famous physicists and their key contributions",
    config: {
      thinkingConfig: {
        // Enable thinking with a budget of 1024 tokens.
        thinkingBudget: 1024,
        // Turn off thinking:
        // thinkingBudget: 0
        // Turn on dynamic thinking:
        // thinkingBudget: -1
      },
    },
  });

  // Log the response text to the console.
  console.log(response.text);
}

// Execute the main function.
main();