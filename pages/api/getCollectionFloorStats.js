export default function handler(req, res) {
    const getCollectionFloorStats = async () => {
      const { collectionSlug } = req.body; // Extract collectionSlug from the request body
      const response = await fetch(
        `https://api.opensea.io/api/v1/collection/${collectionSlug}/stats`,
        {
          method: 'GET',
          headers: {
            Accept: '*/*'
          },
        }
      );
  
      const data = await response.json(); // Parse the response data
  
      res.status(200).json({ data }); // Send the data in the response
    };
  
    getCollectionFloorStats(); // Call the getCollectionFloorStats function
  }