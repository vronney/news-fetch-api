require('dotenv').config();
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static('.'));

// Test route
app.get('/test', (req, res) => {
    res.json({ message: 'Server is running' });
});

// News API proxy endpoint
app.get('/api/news', async (req, res) => {
    const apiKey = process.env.NEWS_API_KEY;
    if (!apiKey) {
        console.log('API key not found');
        return res.status(500).json({ error: 'API key not found' });
    }

    const queryParams = new URLSearchParams(req.query);
    queryParams.set('apikey', apiKey);

    const url = `https://newsdata.io/api/1/news?${queryParams.toString()}`;
    
    try {
        const response = await fetch(url);
        console.log('Response status:', response.status);
        const data = await response.json();
        console.log('Data received');
        res.json(data);
    } catch (error) {
        console.error('Fetch error:', error);
        res.status(500).json({ error: 'Failed to fetch news' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});