const express = require('express');
const Moralis = require('moralis').default;
const { EvmChain } = require('@moralisweb3/common-evm-utils');

const app = express();
const port = 3001;

app.get('/nft-collections' , async (req, res) => {
    await Moralis.start({
      apiKey: process.env.MORALIS_API_KEY,
    });

    let address = '0x8c96d1BC087191B2fD5963D792550CeFa7955210'
    let chain = EvmChain.ETHEREUM;

    const response = await Moralis.EvmApi.nft.getWalletNFTCollections({
        address,
        chain
    })
    console.log(response.toJSON())
})

app.listen(port, () => {
  console.log(`Moralis server is listening on port ${port}`);
});