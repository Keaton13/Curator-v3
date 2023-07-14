export default function handler(req, res) {
    const getTrendingNftCollections = async () => {
      const response = await fetch(
        'https://api.nft-stats.com/json_data/collections-trending',
        {
          method: 'GET',
        }
      );
  
      const data = await response.json(); // Parse the response data
  
      res.status(200).json({ data }); // Send the data in the response
    };
  
    getTrendingNftCollections(); // Call the getTrendingNftCollections function
  }