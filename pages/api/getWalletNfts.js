const Moralis = require('moralis').default;
const { EvmChain } = require('@moralisweb3/common-evm-utils');

// Start Moralis with the provided API key
Moralis.start({
  apiKey: process.env.MORALIS_API_KEY,
});

export default function handler(req, res) {
  const getWalletNfts = async () => {
    let { address } = req.body; // Extract address from the request body

    let chain = EvmChain.ETHEREUM; // Set the chain to Ethereum

    const response = await Moralis.EvmApi.nft.getWalletNFTs({
      address,
      chain
    });

    const data = response?.result; // Get the result from the response
    res.status(200).json({ data }); // Send the data in the response
  };

  getWalletNfts(); // Call the getWalletNfts function
}