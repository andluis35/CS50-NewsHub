import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/news', async (req, res) => {
    const category = req.query.category || 'top';

    try {
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