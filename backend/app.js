import axios from 'axios';
import dotenv from 'dotenv';
import express from 'express';
import path from "path";
import { fileURLToPath } from 'url';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(express.static(path.join(__dirname, "../frontend")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/index.html"));
});

app.get('/news', async (req, res) => {
    try {
        const category = req.query.category || 'top';
        const response = await axios.get('https://newsdata.io/api/1/latest', {
            params: {
                apikey: process.env.NEWS_API_KEY,
                category: category,
                language: 'en'
            }
        });
        res.json(response.data);
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json({ error: "Failed to fetch news" });
    }
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})