export default function handler(req, res) {
    const getWhaleTransactions = async () => {
      const response = await fetch(
        'https://api.whale-alert.io/v1/transactions?api_key=aEhtUqSlRgn06iXo1AloB5yKYzdSAS1X&min_value=1000000',
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
  
    getWhaleTransactions(); // Call the getWhaleTransactions function
  }