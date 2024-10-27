const OpenAI = require('openai');
const fs = require('fs');
const axios = require('axios');

var openai = new OpenAI();

// async function sendImageGenRequest(prompt) {
//     const response = await openai.images.generate({
//         model: "dall-e-3",
//         prompt: prompt,
//         n: 1,
//         size: "1024x1024",
//     });
//     return response.data;
// }


async function sendImageGenRequest(prompt) {
    const response = await openai.images.generate({
        model: "dall-e-3",
        prompt: prompt,
        n: 1,
        size: "1024x1024",
    });

    const imageUrl = response && response.data ? response.data[0].url : '';
    const imageResponse = await axios.get(imageUrl, { responseType: 'arraybuffer' });
    var fileName = String(prompt).toLowerCase();
    fileName = 'generated-images' + '/' + fileName.replaceAll(' ','-') + '.jpg';

    fs.writeFileSync(fileName, imageResponse.data); // Save as "image.jpg"
    console.log('Image saved as image.jpg');

    // Append the image to the DOM, e.g., a div with id "imageContainer"
    // document.getElementById('imageContainer').appendChild(imgElement);
    // const buffer = Buffer.from(imageResponse.data, 'binary');
    // res.writeHead(200, {
    //     'Content-Type': 'image/png',
    //     'Content-Length': buffer.length,
    //   });
    // res.end(buffer);
    return response.data;
}

module.exports = {sendImageGenRequest};
