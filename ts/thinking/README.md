# Gemini Thinking Examples

This directory contains examples demonstrating the "thinking" capabilities of the Gemini API, which allows the model to show its reasoning process.

## Setup

These examples require the same setup as the main project:
1. An API key from [Google AI Studio](https://aistudio.google.com/)
2. A `.env` file in the parent directory with your `GEMINI_API_KEY`

## Examples

### index.js
Demonstrates how to use the `thinkingBudget` parameter to control the model's thinking process:
- Set `thinkingBudget: 1024` to enable thinking with a specific budget.
- Set `thinkingBudget: 0` to disable thinking.
- Set `thinkingBudget: -1` to enable dynamic thinking.

### main.js
Shows how to use `includeThoughts: true` to receive the model's thought process along with the answer. The code separates thoughts from the final answer in the response.

### ultimate.js
A more advanced example that:
- Uses streaming to receive thoughts and answers in real-time.
- Processes a complex logical puzzle.
- Separates and displays thoughts and answers as they arrive.

## Usage

Run any example with:
```bash
node thinking/[filename].js
```

For example:
```bash
node thinking/index.js
```

## Official Documentation

- [Google Gemini API Thinking Features](https://ai.google.dev/docs/thinking_mode)
- [Google Generative AI JavaScript SDK](https://github.com/google/generative-ai-js)