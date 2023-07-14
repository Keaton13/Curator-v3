export default function handler(req, res) {
  const getTrendingNftCollections30d = async () => {
    const response = await fetch(
      'https://api.nft-stats.com/json_data/collections-30d',
      {
        method: 'GET',
      }
    );

    const data = await response.json(); // Parse the response data

    res.status(200).json({ data }); // Send the data in the response
  };

  getTrendingNftCollections30d(); // Call the getTrendingNftCollections30d function
}