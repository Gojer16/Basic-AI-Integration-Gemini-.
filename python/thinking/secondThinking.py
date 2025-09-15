"""
This example demonstrates how to use the "thinking" feature with streaming responses.
It presents a logic puzzle and shows how to process streamed responses to separate
the model's thoughts from the final answer in real-time.
"""
from google import genai
from google.genai import types
from dotenv import load_dotenv
import os
load_dotenv()

api_key = os.getenv("GEMINI_API_KEY")

client = genai.Client(api_key=api_key)

# Define a logic puzzle that requires reasoning to solve.
prompt = """
Alice, Bob, and Carol each live in a different house on the same street: red, green, and blue.
The person who lives in the red house owns a cat.
Bob does not live in the green house.
Carol owns a dog.
The green house is to the left of the red house.
Alice does not own a cat.
Who lives in each house, and what pet do they own?
"""

# Initialize variables to store thoughts and answer.
thoughts = ""
answer = ""

# Generate content using streaming with thinking enabled.
# Streaming is useful for long-running tasks as it provides partial results as they become available.
# The thinking_config parameter with include_thoughts=True allows us to see the model's reasoning process.
for chunk in client.models.generate_content_stream(
    model="gemini-2.5-pro",
    contents=prompt,
    config=types.GenerateContentConfig(
      thinking_config=types.ThinkingConfig(
        include_thoughts=True
      )
    )
):
  # Process each part of the streamed response.
  for part in chunk.candidates[0].content.parts:
    if not part.text:
      continue
    elif part.thought:
      # Handle thought parts.
      if not thoughts:
        print("Thoughts summary:")
      print(part.text)
      thoughts += part.text
    else:
      # Handle answer parts.
      if not answer:
        print("Answer:")
      print(part.text)
      answer += part.text