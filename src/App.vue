<template>
    <div class="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6">
        <h1 class="text-3xl font-bold mb-4">AI Blog Generator</h1>
        <input v-model="topic" type="text" placeholder="Enter a topic..."
            class="w-full max-w-md p-2 border rounded text-black" />
        <button @click="generateBlog" class="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded">
            Generate Blog
        </button>

        <div v-if="generatedBlog" class="mt-6 p-4 bg-gray-800 rounded w-full max-w-md">
            <h2 class="text-xl font-semibold">Generated Blog:</h2>
            <p class="mt-2">{{ generatedBlog }}</p>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const topic = ref("");
const generatedBlog = ref("");

const generateBlog = async () => {
    if (!topic.value) return;
    generatedBlog.value = `AI blog for topic: "${topic.value}" \n\n Lorem ipsum...`;
};
</script>