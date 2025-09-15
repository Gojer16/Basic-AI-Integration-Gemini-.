# Gemini API Integration Example (Python)
 
This repo demonstrates a simple integration with the Google Gemini API using Python. 
 
## Setup 
 
1. Ensure you have Python 3.12 or later installed.
 
2. Install the required dependencies: 
   pip install google-generativeai python-dotenv 
 
3. Create a .env file in the root directory with your Gemini API key: 
   GEMINI_API_KEY=your_api_key_here 
   You can obtain an API key from [Google AI Studio](https://aistudio.google.com/). 
 
## Code Explanation 
 
The index.py file contains a simple implementation that: 
1. Imports the required packages (google.generativeai and dotenv).
2. Loads environment variables from the .env file.
3. Configures the Gemini AI client with your API key.
4. Sends a prompt to the Gemini model and prints the response.
 
The code asks Gemini to explain how AI works in a few words. 
 
## Usage 
 
Run the script with: 
python index.py 
 
## Official Documentation 
 
- [Google Gemini API Documentation](https://ai.google.dev/docs) 
- [Google Generative AI Python SDK](https://github.com/google-generative-ai/python) 
