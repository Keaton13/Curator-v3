const Moralis = require('moralis').default;
const { EvmChain } = require('@moralisweb3/common-evm-utils');

 Moralis.start({
    apiKey: process.env.MORALIS_API_KEY,
  });

export default function handler(req, res) {
    const getWalletNftCollections = async () => {
          let allNFTS = [];
          let address = '0x8c96d1BC087191B2fD5963D792550CeFa7955210'
          let chains = [EvmChain.ETHEREUM, EvmChain.POLYGON];
          
          for (const chain of chains){
            const response = await Moralis.EvmApi.nft.getWalletNFTCollections({
                address,
                chain
            });

            allNFTS.push(response);
          }
        res.status(200).send(allNFTS)
        //   const data = await response.json();

    }    
    getWalletNftCollections();
}