import { createContext, useState, useEffect, useCallback } from "react";

export const NFTContext = createContext();

export const NFTProvider = ({ children }) => {
  const [top10Collections, setTop10Collections] = useState();
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
      setTop10Collections(data.data);
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
      console.log(collectionDataOpenSea);
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
          if(!walletNfts[i].collectionData){
            walletNfts[i].collectionData = collectionData[v];
          }
        }
    
      }
    }
  
    let totalCollectionInEth = 0;
    for (let i = 0; i < collectionData.length; i++) {
      collectionData[i].floorValue = collectionData[i].floor * collectionData[i].amount;
      totalCollectionInEth = totalCollectionInEth + collectionData[i].floorValue;
    }

    setUserWalletNfts(walletNfts);
    setWalletNftCollectionData(collectionData, totalCollectionInEth);
    setTotalWalletValue(totalCollectionInEth);
  };

  return (
    <NFTContext.Provider value={{ top10Collections, userWalletNfts, walletNftCollectionData, totalWalletValue }}>
      {children}
    </NFTContext.Provider>
  );
};
