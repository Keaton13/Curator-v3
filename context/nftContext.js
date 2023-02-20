import { createContext, useState, useEffect, useCallback } from "react";

export const NFTContext = createContext();

export const NFTProvider = ({ children }) => {
  const [trendingCollections, setTrendingCollections] = useState();
  const [trendingCollections24h, setTrendingCollections24h] = useState();
  const [trendingCollections7d, setTrendingCollections7d] = useState();
  const [trendingCollections30d, setTrendingCollections30d] = useState();
  const [userWalletNfts, setUserWalletNfts] = useState([]);
  const [walletNftCollectionData, setWalletNftCollectionData] = useState();
  const [totalWalletValue, setTotalWalletValue] = useState();

  useEffect(() => {
    getTrendingNftCollections();
    convertCollectionData();
  }, []);

  const getTrendingNftCollections = async () => {
    try {
      const res = await fetch("/api/getTrendingNftCollections");
      const data = await res.json();
      console.log(data.data);
      setTrendingCollections(data.data);
      getTrendingNftCollections24h();
    } catch (e) {
      console.error(e);
    }
  };

  const getTrendingNftCollections24h = async () => {
    try {
      const res = await fetch("/api/getTrendingNftCollections24h");
      const data = await res.json();
      console.log(data.data);
      setTrendingCollections24h(data.data);
      getTrendingNftCollections7d();
    } catch (e) {
      console.error(e);
    }
  };

  const getTrendingNftCollections7d = async () => {
    try {
      const res = await fetch("/api/getTrendingNftCollections7d");
      const data = await res.json();
      console.log(data.data);
      setTrendingCollections7d(data.data);
      getTrendingNftCollections30d();
    } catch (e) {
      console.error(e);
    }
  };

  const getTrendingNftCollections30d = async () => {
    try {
      const res = await fetch("/api/getTrendingNftCollections30d");
      const data = await res.json();
      console.log(data.data);
      setTrendingCollections30d(data.data);
    } catch (e) {
      console.error(e);
    }
  };

  const getWalletNfts = async () => {
    console.log("calling Moralis data");
    try {
      const res = await fetch("/api/getWalletNfts");
      const data = await res.json();
      return data.data;
    } catch (e) {
      console.error(e);
    }
  };

  const getWalletNftCollections = async () => {
    try {
      const res = await fetch("/api/getWalletNftCollectionsOpensea");
      const data = await res.json();
      return data.data;
    } catch (e) {
      console.error(e);
    }
  };

  const getCollectionFloorStats = async (slug) => {
    try {
      const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ collectionSlug: slug }),
      };
      const res = await fetch("/api/getCollectionFloorStats", options);
      const data = await res.json();
      return data.data;
    } catch (e) {
      console.error(e);
    }
  };

  const convertCollectionData = async () => {
    const walletNfts = await getWalletNfts();
    const walletCollections = await getWalletNftCollections();

    console.log(walletNfts);
    console.log(walletCollections);

    let collectionData = [];

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
      collectionData.push(nftData);
    }

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
    for (let i = 0; i < collectionData.length; i++) {
      collectionData[i].floorValue =
        collectionData[i].floor * collectionData[i].amount;
      totalCollectionInEth =
        totalCollectionInEth + collectionData[i].floorValue;
    }

    setUserWalletNfts(walletNfts);
    setWalletNftCollectionData(collectionData, totalCollectionInEth);
    setTotalWalletValue(totalCollectionInEth);
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
      }}
    >
      {children}
    </NFTContext.Provider>
  );
};
