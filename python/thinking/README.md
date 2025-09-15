# Thinking Examples

This folder contains examples demonstrating the "thinking" feature of the Gemini API, which allows you to see the model's reasoning process before the final answer.

## What is Streaming?

Streaming allows you to receive responses from the model as they are generated, rather than waiting for the entire response to be completed. This is especially useful for:
- Long-running tasks where you want to see partial results.
- Interactive applications where you want to display results as they arrive.
- Reducing perceived latency for large responses.

In the context of thinking, streaming allows you to see thoughts and the final answer as they are generated, rather than waiting for the entire thinking process to complete.

## Files

### thinking.py
Demonstrates how to use the thinking feature with a non-streaming request:
- Asks for the sum of the first 50 prime numbers.
- Uses `thinking_config=types.ThinkingConfig(include_thoughts=True)` to include thought processes.
- Separates and displays the thought summary from the final answer.

### secondThinking.py
Shows how to use streaming with the thinking feature:
- Presents a logic puzzle about people living in colored houses with pets.
- Uses `generate_content_stream` to receive responses in chunks.
- Processes the stream to separate thoughts from the final answer in real-time.
- Uses `thinking_config=types.ThinkingConfig(include_thoughts=True)` to include thoughts in the stream.

### main.py
A basic thinking implementation example:
- Requests a list of 3 famous physicists and their key contributions.
- Uses `thinking_config=types.ThinkingConfig(thinking_budget=1024)` to control thinking depth.
- Shows how to adjust thinking budget for different use cases:
  - `thinking_budget=0` to turn off thinking.
  - `thinking_budget=-1` to enable dynamic thinking.
  - `thinking_budget=1024` for a fixed thinking budget.

## Usage

Run any example with:
```
python thinking.py
python secondThinking.py
python main.py
```