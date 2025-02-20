import axios from "axios";

const API_URL = "https://api.openai.com/v1/chat/completions";
const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

export async function generateBlogFromAI(prompt) {
    try {
        const response = await axios.post(
            API_URL,
            {
                model: "gpt-4o-mini",
                messages: [{ role: "user", content: prompt }],
                temperature: 0.7,
                max_tokens: 500
            },
            {
                headers: {
                    Authorization: `Bearer ${API_KEY}`,
                    "Content-Type": "application/json",
                },
            }
        );

        return response.data.choices[0].message.content.trim();
    } catch (error) {
        console.error("API xatosi:", error.response?.data || error.message);

        if (error.response?.data?.error?.code === "insufficient_quota") {
            return "❌ API kvotangiz tugagan. Iltimos, OpenAI billing-ni tekshiring.";
        } else if (error.response?.status === 401) {
            return "❌ Noto‘g‘ri API kalit. Iltimos, .env faylni tekshiring.";
        } else if (error.response?.status === 404) {
            return "❌ API URL noto‘g‘ri. To‘g‘ri endpointni ishlatayotganingizga ishonch hosil qiling.";
        } else {
            return "❌ Noma'lum xatolik yuz berdi.";
        }
    }
}
