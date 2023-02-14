const Moralis = require('moralis').default;
const { EvmChain } = require('@moralisweb3/common-evm-utils');

 Moralis.start({
    apiKey: process.env.MORALIS_API_KEY,
  });

export default function handler(req, res) {
    const getWalletNfts = async () => {
          let address = '0x8c96d1BC087191B2fD5963D792550CeFa7955210'
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