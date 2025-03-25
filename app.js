require('dotenv').config();
const express = require('express')
const app = express()
const port = 3000
app.use(express.json());
const Groq = require('groq-sdk');

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
app.post('/prompt', async (req, res) => {

    const chatCompletion = await groq.chat.completions.create({
        messages: [{
            role: "user", content: req.body.prompt,
        },],
        model: "llama3-8b-8192",
    })
        .then((chatCompletion) => {
            // console.log(chatCompletion.choices[0]?.message?.content || "");
            res.status(200).json({
                msg: chatCompletion.choices[0].message.content
            })
        });


})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})
