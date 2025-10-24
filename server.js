import 'dotenv/config';
import express from 'express';
import newsHandler from './api/news.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from root directory
app.use(express.static('.'));

// API route for news
app.all('/api/news', (req, res) => {
  newsHandler(req, res);
});

// Catch-all middleware to serve index.html for SPA routing
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
