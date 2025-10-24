import 'dotenv/config';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import newsHandler from './api/news.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// API route for news (only for local development)
app.all('/api/news', (req, res) => {
  newsHandler(req, res);
});

// Serve static files from root directory
app.use(express.static('.'));

app.listen(PORT, () => {
  console.log(`Development server running on http://localhost:${PORT}`);
  console.log('API endpoints available at /api/*');
});
