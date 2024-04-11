require('dotenv').config();
const express = require('express');
require('express-async-errors');
const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');
const app = express();
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const commandsRoutes = require('./routes/commandsRoutes');
const errorMiddleware = require('./middlewares/error');

app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:5173'
}));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.use(express.json({ limit: '100mb' }));

app.use('/users', userRoutes)
app.use('/commands', commandsRoutes)

app.post('/upload', async (req, res) => {
    const base64Audio = req.body.audioBuffer;
    const audioBuffer = Buffer.from(base64Audio, 'base64');

    const formData = new FormData();
    formData.append('file', audioBuffer, { filename: 'audio.mp3', contentType: 'audio/mp3' });
    formData.append('model', 'whisper-1');
    formData.append('response_format', 'json');

    const config = {
        headers: {
            'Content-Type': 'multipart/form-data',
            "Authorization": `Bearer ${process.env.WHISPER_API_KEY}`
        }
    };

    try {
        const response = await axios.post('https://api.openai.com/v1/audio/transcriptions', formData, config);
        const transcription = response.data.text;
        res.json({ transcription });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error transcribing audio' });
    }
});

app.use(errorMiddleware);

module.exports = app;
