# Gemini API Integration Example

This repository demonstrates a simple integration with the Google Gemini API using JavaScript.

## Setup

1. Initialize a new Node.js project:
   ```bash
   npm init -y
   ```

2. Install the required dependencies:
   ```bash
   npm install @google/genai dotenv
   ```

3. Create a `.env` file in the root directory with your Gemini API key:
   ```env
   GEMINI_API_KEY=your_api_key_here
   ```
   You can obtain an API key from [Google AI Studio](https://aistudio.google.com/).

## Code Explanation

The `index.js` file contains a simple implementation that:
1. Imports the required packages (`@google/genai` and `dotenv`).
2. Loads environment variables from the `.env` file.
3. Initializes the Gemini AI client with your API key.
4. Sends a prompt to the Gemini model and logs the response.

The code asks Gemini to explain Occam's Razor with a simple everyday example.

## Usage

Run the script with:
```bash
node index.js
```

## Official Documentation

- [Google Gemini API Documentation](https://ai.google.dev/docs)
- [Google Generative AI JavaScript SDK](https://github.com/google/generative-ai-js)