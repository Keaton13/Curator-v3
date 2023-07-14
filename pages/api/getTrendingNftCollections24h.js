export default function handler(req, res) {
    const getTrendingNftCollections24h = async () => {
      const response = await fetch(
        'https://api.nft-stats.com/json_data/collections-24h',
        {
          method: 'GET',
        }
      );
  
      const data = await response.json(); // Parse the response data
  
      res.status(200).json({ data }); // Send the data in the response
    };
  
    getTrendingNftCollections24h(); // Call the getTrendingNftCollections24h function
  }