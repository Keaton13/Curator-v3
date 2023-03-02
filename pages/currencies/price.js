import { useState, useEffect, useContext } from "react";
import { CoinMarketContext } from "../../context/context";
import CoinDetails from "../../components/coinDetails";
import Header from "../../components/Header";
import WalletConnectModal from "../../components/WalletConnectModal";

const Price = () => {
  let { top100Coins, coinMetaData } = useContext(CoinMarketContext);
  const [id, setId] = useState("");
  const [targetCoin, setTargetCoin] = useState(null);
  const [targetCoinMetaData, setTargetCoinMetaData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    setId(Number(urlParams.get("id")));
  };

  useEffect(() => {
    if (top100Coins && coinMetaData) {
      setTargetCoin(top100Coins.find((object) => object.id === id));
      setTargetCoinMetaData(coinMetaData.find((object) => object.id === id));
      setLoading(false);
    }
  }, [top100Coins, coinMetaData, id])

  return (
    <div>
      <Header />
      {top100Coins && coinMetaData ? (
        <CoinDetails
          id={id}
          coinData={targetCoin}
          coinMetaData={targetCoinMetaData}
        />
      ) : (
        <WalletConnectModal status={"Loading"} loadingText={"Loading Data..."}/>
      )}
    </div>
  );
};

export default Price;
