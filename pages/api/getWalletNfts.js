const Moralis = require('moralis').default;
const { EvmChain } = require('@moralisweb3/common-evm-utils');

 Moralis.start({
    apiKey: process.env.MORALIS_API_KEY,
  });

export default function handler(req, res) {
    const getWalletNfts = async () => {
          let {address} = req.body
          console.log(address);
          let chain = EvmChain.ETHEREUM;
          
            const response = await Moralis.EvmApi.nft.getWalletNFTs({
                address,
                chain
            })
            // console.log(response?.result);
          const data = response?.result;
          res.status(200).json({data})
    }    
    getWalletNfts();
}