const OpenAIApi = require('openai');
const imageGen = require('../scripts/ImageGenerator');

// const configuration = new Configuration({
//     apiKey: process.env.OPENAI_API_KEY,
// });

var openai = new OpenAIApi();
exports.testVe = async (req, res, error) => {
    try{
        const response = await sendVectorEmbeddingRequest(req.query.prompt);
        res.status(200).json({response});
    }
    catch(error) {
        res.status(500).json({ message: "Error fetching data", error });
    }
}

exports.testImageGen = async (req, res, error) => {
    try{
        const response = await imageGen.sendImageGenRequest(req.query.prompt);
        res.status(200).json({response});
    }
    catch(error) {
        res.status(500).json({ message: "Error fetching data", error });
    }
}

exports.testTextGen = async (req, res, error) => {
    try{
       const response = await sendTextGenerationRequest(req.query.prompt, req.query.maxTokens);
       res.status(200).json({response});
    }
    catch(error) {
        res.status(500).json({ message: "Error fetching data", error });
    }
}

// async function sendImageGenRequest(prompt) {
//     const response = await openai.images.generate({
//         model: "dall-e-3",
//         prompt: prompt,
//         n: 1,
//         size: "1024x1024",
//     });
//     return response.data;
// }


async function sendVectorEmbeddingRequest(prompt) {
// const OpenAI = require('openai');
// const openai = new openai();

const embedding = await openai.embeddings.create({
    model: "text-embedding-3-small",
    input: prompt,
});

return embedding;
}

async function sendTextGenerationRequest(prompt, maxTokens)
{
    const res = await openai.chat.completions.create({
        model : "gpt-4o-mini",
        messages:[
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": prompt}
          ],
        // max_tokens: maxTokens,
        temperature: 0.7,
    });

    return res.choices[0].message.content.trim();
}