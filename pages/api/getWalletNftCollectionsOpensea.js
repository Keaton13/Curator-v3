export default function handler(req, res) {
    const getWalletNftCollections = async () => {
      const { address } = req.body; // Extract address from the request body

      const response = await fetch(
        `https://api.opensea.io/api/v1/collections?asset_owner=${address}&offset=0&limit=300`,
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
  
    getWalletNftCollections(); // Call the getWalletNftCollections function
  }