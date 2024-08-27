const OpenAIApi = require('openai');

// const configuration = new Configuration({
//     apiKey: process.env.OPENAI_API_KEY,
// });

var openai = new OpenAIApi();
exports.test = async (req, res) => {
    try{
        const response = await sendRequest();
        res.status(200).json({response});
    }
    catch(error) {
        res.status(500).json({ message: "Error fetching data", error });
    }
    res.send("executing test VectorEmbeddings request");
    res.sendRequest()
}


async function sendRequest() {
// const OpenAI = require('openai');
// const openai = new openai();

const embedding = await openai.embeddings.create({
    model: "text-embedding-3-large",
    input: "Action Motivation Inspiration",
});

return embedding;
}