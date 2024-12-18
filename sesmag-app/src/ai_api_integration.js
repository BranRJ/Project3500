require('dotenv').config(); // Load environment variables at the top of the file
const pdfParse = require('pdf-parse');
const fs = require('fs');
const axios = require('axios'); // Ensure axios is imported

const analyzePDFWithAI = async (pdfPath) => {
    try {
        // Read and parse PDF content
        const pdfData = await pdfParse(fs.readFileSync(pdfPath));
        const pdfText = pdfData.text;

        // Retrieve API key from environment variables
        const apiKey = process.env.OPENAI_API_KEY;

        // Send extracted text to OpenAI API
        const response = await axios.post(
            'https://api.openai.com/v1/chat/completions',
            {
                model: 'gpt-4',
                messages: [
                    { role: 'system', content: 'You are Fee, a fictional SESMag character providing reviews.' },
                    { role: 'user', content: `Analyze this document: ${pdfText}` },
                ],
            },
            {
                headers: {
                    'Authorization': `Bearer ${apiKey}`,
                    'Content-Type': 'application/json',
                },
            }
        );

        // Return AI response
        return response.data.choices[0].message.content;
    } catch (error) {
        console.error('Error communicating with AI API:', error.response?.data || error.message);
        throw new Error('AI processing failed');
    }
};

module.exports = { analyzePDFWithAI };
