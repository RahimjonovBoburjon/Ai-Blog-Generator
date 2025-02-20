<template>
    <div
        class="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white p-6">
        <h1 class="text-4xl font-bold mb-6 animate-fade-in">AI Blog Generator</h1>
        <input v-model="topic" type="text" placeholder="Enter a topic..."
            class="w-full max-w-md p-3 border border-gray-700 rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300" />
        <button @click="generateBlog"
            class="mt-6 px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 rounded-lg text-lg font-semibold disabled:opacity-50 transition-all duration-300"
            :disabled="loading">
            {{ loading ? "Generating..." : "Generate Blog" }}
        </button>

        <div v-if="generatedBlog"
            class="mt-8 p-6 bg-gray-800 rounded-lg w-full max-w-2xl backdrop-blur-md bg-opacity-80 animate-fade-in">
            <h2 class="text-2xl font-semibold mb-4">Generated Blog:</h2>
            <p class="mt-2 text-gray-300 leading-relaxed">{{ generatedBlog }}</p>
        </div>
    </div>

    <footer
        class="bg-gradient-to-br from-gray-800 to-gray-700 text-white text-lg py-4 fixed bottom-0 left-0 right-0 shadow-lg rounded-t-lg backdrop-blur-md bg-opacity-90 animate-fade-in border-t border-x border-blue-500">
        <p class="font-semibold text-center">
            Powered by
            <span class="text-yellow-300 hover:text-yellow-400 transition-colors duration-300">
                <a href="https://github.com/RahimjonovBoburjon" target="_blank" rel="noopener noreferrer">Bobur</a>
            </span>
        </p>
    </footer>
</template>

<script setup>
import { ref } from "vue";
import { generateBlogFromAI } from "./api";

const topic = ref("");
const generatedBlog = ref("");
const loading = ref(false);

const generateBlog = async () => {
    if (!topic.value) return;
    loading.value = true;
    generatedBlog.value = await generateBlogFromAI(topic.value);
    loading.value = false;
};
</script>

<style>
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-fade-in {
    animation: fadeIn 0.5s ease-out;
}
</style>