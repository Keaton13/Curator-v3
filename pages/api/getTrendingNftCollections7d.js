export default function handler(req, res) {
    const getTrendingNftCollections7d = async () => {
      const response = await fetch(
        'https://api.nft-stats.com/json_data/collections-7d',
        {
          method: 'GET',
        }
      );
  
      const data = await response.json(); // Parse the response data
  
      res.status(200).json({ data }); // Send the data in the response
    };
  
    getTrendingNftCollections7d(); // Call the getTrendingNftCollections7d function
  }