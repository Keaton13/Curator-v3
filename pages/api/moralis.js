const express = require('express');
const Moralis = require('moralis').default;
const { EvmChain } = require('@moralisweb3/common-evm-utils');

const app = express();
const port = 3000;
const MORALIS_API_KEY = 'replace_me';
const address = 'replace_me';
const chain = EvmChain.ETHEREUM;

const startServer = async () => {
  await Moralis.start({
    apiKey: MORALIS_API_KEY,
  });

  app.listen(port, () => {
    console.log(`Moralis server is listening on port ${port}`);
  });
};

startServer();

export default (req, res) => {
  res.status(200).json({ message: 'Moralis server is running.' });
};