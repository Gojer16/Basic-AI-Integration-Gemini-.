"""
This is a simple example of how to use the Google Gemini API with Python.
It demonstrates basic configuration and content generation without the thinking feature.
"""
import os
import google.generativeai as genai
from dotenv import load_dotenv

# Load the environment variables from the .env file.
load_dotenv()

# Get the API key from the environment variable.
api_key = os.getenv("GEMINI_API_KEY")

# Check if the key exists before proceeding.
if api_key:
    # Use the recommended method to configure the API key.
    genai.configure(api_key=api_key)

    # Use a valid model name from the Gemini family.
    model = genai.GenerativeModel('gemini-2.5-flash')

    # Generate content using the model.
    response = model.generate_content("Explain how AI works in a few words")

    # Print the model's response.
    print(response.text)
else:
    # Handle the case where no API key is found.
    print("Error: API key not found. Please set the GEMINI_API_KEY environment variable.")