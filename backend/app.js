import axios from 'axios';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import path from "path";
import { fileURLToPath } from 'url';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
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

        const articles = (response.data.results || []).map(a => ({
            title: a.title || 'No title',
            description: a.description || '',
            link: a.link || '#',
            image_url: a.image_url || './assets/images/fallback_news.png'
        }));

        if (articles.length === 0) {
            return res.json({ results: [] });
        }
        res.json({ results: articles });
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json({ error: "Failed to fetch news" });
    }
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})