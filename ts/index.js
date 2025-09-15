// Import required packages.
// @google/genai - Google's Generative AI SDK for JavaScript.
// dotenv - loads environment variables from .env file.
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
 * Main function that sends a prompt to the Gemini model and logs the response.
 * This example asks Gemini to explain Occam's Razor with a simple everyday example.
 */
async function main() {
  // Define the prompt to send to the AI model.
  const prompt = "Explain the concept of Occam's Razor and provide a simple, everyday example.";

  // Send the prompt to the Gemini model and get the response.
  const response = await ai.models.generateContent({
    model: "gemini-2.5-pro",
    contents: prompt,
  });

  // Log the response text to the console.
  console.log(response.text);
}

// Execute the main function.
main();