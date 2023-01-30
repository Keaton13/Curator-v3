import { useEffect, useState, useContext } from "react";
import { CoinMarketContext } from "../../context/context";
import CMCPriceConverter from "../../components/CMCpriceConverter";
import Header from "../../components/Header";
import Graph from "../../components/Graph";
import Chat from "../../components/Chat";

const styles = {
  activeTab: `p-1 px-2 mr-2 rounded-lg bg-[#171924]`,
  tabItem: `px-2`,
  tabContainer: `flex items-center p-2 rounded-xl bg-[#222531] border border-gray-500/10 text-sm`,
  info: `min-h-screen`,
  main: `text-white mx-auto max-w-screen-2xl`,
  flexStart: `flex items-start`,
  flexBetween: `flex justify-between`,
  flexBetweenCenter: `flex justify-between items-center`,
  tabContainerWrapper: `p-10 pl-0 pr-0 w-2/3`,
  flexCenter: `flex items-center`,
};

const Currencies = () => {
  let { top100Coins, coinMetaData } = useContext(CoinMarketContext);
  const [id, setId] = useState("");
  const [loading, setLoading] = useState(true);
  const [coinTextData, setCoinTextData] = useState({});

  useEffect(() => {
    getURLData();
  }, []);

  const getURLData = async () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    setId(Number(urlParams.get("id")));
  };

  useEffect(() => {
    if (top100Coins && coinMetaData) {
     let targetCoin = top100Coins.find((object) => object.id === id);
     let targetCoinMetaData = coinMetaData.find((object) => object.id === id);
    //  setCoinTextData(targetCoin, targetCoinMetaData)
    //  setLoading(false);
     if(targetCoin, targetCoinMetaData) {
      getCoinTextData(targetCoin, targetCoinMetaData)
     }
    }
  }, [top100Coins, coinMetaData, id]);

  const getCoinTextData = (targetCoin, targetCoinMetaData) => {
    console.log(targetCoin, targetCoinMetaData)
    let from = targetCoin.name;
    let fromLogo = targetCoinMetaData.logo;
    let fromSymbol = targetCoin.symbol;
    let price = targetCoin.quote.USD.price;
    setCoinTextData({from, fromLogo, fromSymbol, price});
    setLoading(false);
  }

  return (
    <div className={styles.info}>
      <Header />
      <main className={styles.main}>
        <div className={styles.flexStart}>
          <div className={styles.tabContainerWrapper}>
            <div className={styles.flexBetween}>
              <div className={styles.tabContainer}>
                <p className={styles.activeTab}>Price</p>
                <p className={styles.tabItem}>Market Cap</p>
                <p className={styles.tabItem}>Trading View</p>
                <p className={styles.tabItem}>History</p>
              </div>
              <div className={styles.tabContainer}>
                <p className={styles.activeTab}>1D</p>
                <p className={styles.tabItem}>2D</p>
                <p className={styles.tabItem}>1M</p>
                <p className={styles.tabItem}>3M</p>
                <p className={styles.activeTab}>1Y</p>
                <p className={styles.tabItem}>YTD</p>
                <p className={styles.tabItem}>ALL</p>
                <p className={styles.tabItem}>LOG</p>
              </div>
            </div>
            <br />
            <Graph />
            <br />
            <div className={styles.flexBetweenContianer}>
              <div className="flex">
                <div className={styles.flexContainer}>
                  <input className="outline-none" type="checkbox" /> &nbsp; USD
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div className={styles.flexCenter}>
                  <input type="checkbox" /> &nbsp; BTC
                </div>
              </div>

              <p>
                Want more data?{""}
                <span className="text-[#6188FF]">Check out our API!</span>
              </p>
            </div>
            <br />
            <br />
            {coinTextData ? (
              <CMCPriceConverter
                coinTextData={coinTextData}
              />
            ) : (
              <></>
            )}
          </div>
          <div className="pt-10 ml-5">
            <Chat />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Currencies;
