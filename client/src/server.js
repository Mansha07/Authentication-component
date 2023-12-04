const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const Configuration= require("openai");
const OpenAIAPI = require("openai");

const config = new Configuration({
  apiKey: "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",
});

const openai = new OpenAIAPI(config);

// Setup server
const app = express();
app.use(bodyParser.json());
app.use(cors());

// Endpoint for ChatGPT
app.post("/chat", async (req, res) => {
  const { prompt } = req.body;

  try {
    const completion = await openai.Completion.create({
      engine: "text-davinci-003",
      max_tokens: 512,
      temperature: 0,
      prompt: prompt,
    });

    res.send(completion.data.choices[0].text);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
});

const port = 8080;
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
