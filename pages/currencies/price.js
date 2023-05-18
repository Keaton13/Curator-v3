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

  // Gets the ID from the URL parameter
  const getData = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    setId(Number(urlParams.get("id")));
  };

  useEffect(() => {
    if (top100Coins && coinMetaData) {
      setTargetCoin(top100Coins.find((object) => object.id === id)); // Find the target coin by matching the ID
      setTargetCoinMetaData(coinMetaData.find((object) => object.id === id)); // Find the target coin's metadata by matching the ID
      setLoading(false); // Set loading to false once the target coin and metadata are set
    }
  }, [top100Coins, coinMetaData, id]);

  return (
    <div>
      <Header />
      {top100Coins && coinMetaData ? (
        <CoinDetails
          id={id}
          coinData={targetCoin}
          coinMetaData={targetCoinMetaData}
        /> // Render CoinDetails component with the target coin and metadata once they are available
      ) : (
        <WalletConnectModal status={"Loading"} loadingText={"Loading Data..."} /> // Render WalletConnectModal with loading status and text
      )}
    </div>
  );
};

export default Price;