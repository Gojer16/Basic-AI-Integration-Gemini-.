"""
This example demonstrates how to use the "thinking" feature of the Gemini API.
It asks for the sum of the first 50 prime numbers and shows both the model's thought process
and the final answer.
"""
from google import genai
from google.genai import types
from dotenv import load_dotenv
import os
load_dotenv()

api_key = os.getenv("GEMINI_API_KEY")

client = genai.Client(api_key=api_key)

prompt = "What is the sum of the first 50 prime numbers?"

# Generate content with thinking enabled.
# The thinking_config parameter with include_thoughts=True allows us to see the model's reasoning.
response = client.models.generate_content(
    model="gemini-2.5-flash",
    contents=prompt,
    config=types.GenerateContentConfig(
        thinking_config=types.ThinkingConfig( 
        include_thoughts=True
        )
    )
)

# Process the response to separate thoughts from the final answer.
# The response may contain multiple parts, some with thoughts and some with the final answer.
for part in response.candidates[0].content.parts:
  if not part.text:
    continue
  if part.thought:
    # Print the thought summary.
    print("Thought summary:")
    print(part.text)
    print()
  else:
    # Print the final answer.
    print("Answer:")
    print(part.text)
    print()