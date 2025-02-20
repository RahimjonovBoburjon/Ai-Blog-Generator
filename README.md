# AI Blog Generator

This is an AI-powered blog generator built using Vue.js, Vite, Tailwind CSS, and OpenAI's GPT API. Users can enter a topic, and the application will generate a blog post using AI.

## Features

- User-friendly interface
- AI-powered blog generation
- Vue 3 with Composition API
- Tailwind CSS for styling
- OpenAI API integration

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/ai-blog-generator.git
   cd ai-blog-generator
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file and add your OpenAI API key:
   ```bash
   VITE_OPENAI_API_KEY=""
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## Deployment

This project can be deployed on Netlify, Vercel, or any static hosting service. If using GitHub Actions for CI/CD, ensure that the OpenAI API key is set as a repository secret (`OPENAI_API_KEY`).

## Usage

1. Enter a topic in the input field.
2. Click the "Generate Blog" button.
3. Wait for the AI to generate content.
4. The generated blog will be displayed below.

## Technologies Used

- Vue 3
- Vite
- Tailwind CSS
- OpenAI GPT API
- Axios

## License

This project is licensed under the MIT License.