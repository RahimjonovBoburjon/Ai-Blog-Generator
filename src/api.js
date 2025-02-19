import axios from "axios";

const API_URL = "https://api.openai.com/v1/chat/completions";
const API_KEY = import.meta.env.VITE_OPENAI_API_KEY; // API kalitni .env fayldan olish

export async function generateBlogFromAI(prompt) {
    try {
        const response = await axios.post(
            API_URL,
            {
                model: "gpt-3.5-turbo", // yoki "gpt-3.5-turbo"
                messages: [{ role: "user", content: prompt }],
                temperature: 0.7,
            },
            {
                headers: {
                    Authorization: `Bearer ${API_KEY}`,
                    "Content-Type": "application/json",
                },
            }
        );
        return response.data;
    } catch (error) {
        console.error("API xatosi:", error.response?.data || error.message);
    }
}