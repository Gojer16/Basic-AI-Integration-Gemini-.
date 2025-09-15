"""
This example demonstrates a basic thinking implementation with different thinking budget options.
It requests information about famous physicists and shows how to control the depth of the model's thinking process.
"""
from google import genai
from google.genai import types
from dotenv import load_dotenv
import os

# Load environment variables from .env file.
load_dotenv()

# Get the API key from environment variables.
api_key = os.getenv("GEMINI_API_KEY")

# Initialize the Gemini client with the API key.
client = genai.Client(api_key=api_key)

# Generate content with a specific thinking budget.
# The thinking_budget parameter controls how much the model thinks:
# - thinking_budget=1024: Fixed thinking budget (default behavior in this example).
# - thinking_budget=0: Turn off thinking completely.
# - thinking_budget=-1: Enable dynamic thinking (model decides how much to think).
response = client.models.generate_content(
    model="gemini-2.5-pro",
    contents="Provide a list of 3 famous physicists and their key contributions",
    config=types.GenerateContentConfig(
        thinking_config=types.ThinkingConfig(thinking_budget=1024)
        # Turn off thinking:
        # thinking_config=types.ThinkingConfig(thinking_budget=0)
        # Turn on dynamic thinking:
        # thinking_config=types.ThinkingConfig(thinking_budget=-1)
    ),
)

# Print the response text, which includes both thoughts and answer due to the thinking budget setting.
print(response.text)