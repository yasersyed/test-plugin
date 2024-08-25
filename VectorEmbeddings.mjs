import OpenAI from "openai";
const openai = new OpenAI();

const embedding = await openai.embeddings.create({
    model: "text-embedding-3-large",
    input: "Action Motivation Inspiration",
});

console.log(embedding);
