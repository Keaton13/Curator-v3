import { createContext, useState, useEffect, useCallback } from "react";

export const NFTContext = createContext();

export const NFTProvider = ({ children }) => {
  // State variables for trending collections
  const [trendingCollections, setTrendingCollections] = useState();
  const [trendingCollections24h, setTrendingCollections24h] = useState();
  const [trendingCollections7d, setTrendingCollections7d] = useState();
  const [trendingCollections30d, setTrendingCollections30d] = useState();

  // State variables for user wallet NFTs
  const [userWalletNfts, setUserWalletNfts] = useState([]);
  const [walletNftCollectionData, setWalletNftCollectionData] = useState();
  const [totalWalletValue, setTotalWalletValue] = useState();

  useEffect(() => {
    getTrendingNftCollections(); // Fetch trending NFT collections on component mount
  }, []);

  // Fetches the trending NFT collections from the API
  const getTrendingNftCollections = async () => {
    try {
      const res = await fetch("/api/getTrendingNftCollections");
      const data = await res.json();
      console.log(data.data);
      setTrendingCollections(data.data); // Set the state with the fetched data
      getTrendingNftCollections24h(); // Fetch additional trending collections
    } catch (e) {
      console.error(e);
    }
  };

  // Fetches additional trending NFT collections in the last 24 hours
  const getTrendingNftCollections24h = async () => {
    try {
      const res = await fetch("/api/getTrendingNftCollections24h");
      const data = await res.json();
      setTrendingCollections24h(data.data); // Set the state with the fetched data
      getTrendingNftCollections7d(); // Fetch additional trending collections
    } catch (e) {
      console.error(e);
    }
  };

  // Fetches additional trending NFT collections in the last 7 days
  const getTrendingNftCollections7d = async () => {
    try {
      const res = await fetch("/api/getTrendingNftCollections7d");
      const data = await res.json();
      setTrendingCollections7d(data.data); // Set the state with the fetched data
      getTrendingNftCollections30d(); // Fetch additional trending collections
    } catch (e) {
      console.error(e);
    }
  };

  // Fetches additional trending NFT collections in the last 30 days
  const getTrendingNftCollections30d = async () => {
    try {
      const res = await fetch("/api/getTrendingNftCollections30d");
      const data = await res.json();
      setTrendingCollections30d(data.data); // Set the state with the fetched data
    } catch (e) {
      console.error(e);
    }
  };

  // Fetches the wallet's NFTs based on the address
  const getWalletNfts = async (address) => {
    console.log("calling Moralis data");
    try {
      const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ address: address }),
      };
      const res = await fetch("/api/getWalletNfts", options);
      const data = await res.json();
      return data.data; // Return the fetched NFT data
    } catch (e) {
      console.error(e);
    }
  };

  // Fetches the wallet's NFT collections based on the address
  const getWalletNftCollections = async (address) => {
    try {
      const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ address: address }),
      };
      const res = await fetch("/api/getWalletNftCollectionsOpensea", options);
      const data = await res.json();
      return data.data; // Return the fetched NFT collection data
    } catch (e) {
      console.error(e);
    }
  };

  // Fetches the floor stats for a given collection slug
  const getCollectionFloorStats = async (slug) => {
    try {
      const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ collectionSlug: slug }),
      };
      const res = await fetch("/api/getCollectionFloorStats", options);
      const data = await res.json();
      return data.data; // Return the fetched floor stats data
    } catch (e) {
      console.error(e);
    }
  };

  // Converts the wallet data into a more usable format
  const convertCollectionData = async (address) => {
    const walletNfts = await getWalletNfts(address); // Fetch the wallet's NFTs
    const walletCollections = await getWalletNftCollections(address); // Fetch the wallet's NFT collections

    console.log(walletNfts);
    console.log(walletCollections);

    let collectionData = [];

    // Loops through walletCollections and gets collectionFloorStats
    for (let i = 0; i < walletCollections.length; i++) {
      let collectionDataOpenSea = await getCollectionFloorStats(
        walletCollections[i].slug
      );
      let nftData = {
        name: walletCollections[i].name,
        slug: walletCollections[i].slug,
        address: walletCollections[i].primary_asset_contracts[0].address,
        amount: 0,
        floor: collectionDataOpenSea.stats.floor_price,
        floorValue: 0,
        volume24h: collectionDataOpenSea.stats.one_day_volume,
      };
      collectionData.push(nftData); // Collect the required collection data
    }

    // Loops through walletNfts and CollectonData to add up amount of nfts per collection
    for (let i = 0; i < walletNfts.length; i++) {
      let address = walletNfts[i].tokenAddress;

      for (let v = 0; v < collectionData.length; v++) {
        if (collectionData[v].address === address) {
          collectionData[v].amount++;
          if (!walletNfts[i].collectionData) {
            walletNfts[i].collectionData = collectionData[v];
          }
        }
      }
    }

    let totalCollectionInEth = 0;

    // Loops through collection data and multiplys floor value based off amount per collection
    for (let i = 0; i < collectionData.length; i++) {
      collectionData[i].floorValue =
        collectionData[i].floor * collectionData[i].amount;
      totalCollectionInEth =
        totalCollectionInEth + collectionData[i].floorValue;
    }

    setUserWalletNfts(walletNfts); // Set the state with the fetched wallet NFTs
    setWalletNftCollectionData(collectionData); // Set the state with the collected collection data
    setTotalWalletValue(totalCollectionInEth); // Set the state with the total wallet value
  };

  return (
    <NFTContext.Provider
      value={{
        trendingCollections,
        trendingCollections24h,
        trendingCollections7d,
        trendingCollections30d,
        userWalletNfts,
        walletNftCollectionData,
        totalWalletValue,
        convertCollectionData,
      }}
    >
      {children}
    </NFTContext.Provider>
  );
};