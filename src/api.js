export const generateBlogFromAI = async (topic) => {
    const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: `Write a blog about ${topic}` }],
            max_tokens: 500,
        }),
    });

    const data = await response.json();
    return data.choices?.[0]?.message?.content || "Error generating blog.";
};