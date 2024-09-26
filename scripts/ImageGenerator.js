const fs = require('fs');
const axios = require('axios');

async function sendImageGenRequest(prompt) {
    const response = await openai.images.generate({
        model: "dall-e-3",
        prompt: prompt,
        n: 1,
        size: "1024x1024",
    });
    const imageUrl = response.data.data[0].url;
    const imageResponse = await axios.get(imageUrl, { responseType: 'arraybuffer' });
    const buffer = Buffer.from(imageResponse.data, 'binary');
    res.writeHead(200, {
        'Content-Type': 'image/png',
        'Content-Length': buffer.length,
      });
    res.end(buffer);
    return response.data;
}

module.exports = {sendImageGenRequest};
