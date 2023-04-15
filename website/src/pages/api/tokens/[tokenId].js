import { getTokenById } from 'lib/prisma/tokens';
import { getAsync, setAsync } from 'lib/redis';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const tokenId = parseInt(req.query.tokenId, 10);
      console.log('Requested tokenId:', tokenId);

      // Check if token data is in cache
      const cacheKey = `token:${tokenId}`;
      
      const cacheStart = Date.now();
      const cachedData = await getAsync(cacheKey);
      console.log(`Redis GET took ${Date.now() - cacheStart} ms`);

      if (cachedData) {
        // Return cached data
        console.log('Token data from cache:', JSON.parse(cachedData));
        res.status(200).json(JSON.parse(cachedData));
      } else {
        // Fetch data from database and cache it
        const tokenData = await getTokenById(tokenId);
        console.log('Token data from API:', tokenData);
        if (tokenData.length > 0) {
          const cacheSetStart = Date.now();
          await setAsync(cacheKey, JSON.stringify(tokenData[0].metadata), 'EX', 60 * 60); // Cache for 1 hour
          console.log(`Redis SET took ${Date.now() - cacheSetStart} ms`);
          
          res.status(200).json(tokenData[0].metadata);
        } else {
          res.status(404).json({ error: 'Token not found', tokenId: tokenId, tokenData: tokenData });
        }
      }
    } catch (error) {
      res.status(500).json({ error: error.message, tokenId: tokenId });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
