export default async function handler(req, res) {
  const apiKey = process.env.API_KEY;
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
}