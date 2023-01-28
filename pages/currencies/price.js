import { useState, useEffect } from "react"
import CoinDetails from "../../components/coinDetails"
import Header from "../../components/header"

const Price = () => {
    const [coinName, setCoinName] = useState('')
    const [coinSymbol, setCoinSymbol] = useState('')
    const [price, setPrice] = useState('')
    const [icon, setIcon] = useState('')

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);

        setCoinName(urlParams.get('coin'));
        setPrice(Number(urlParams.get('price')).toLocaleString(0));
        setCoinSymbol(urlParams.get('symbol'));
        setIcon(urlParams.get('icon'))

    }

    return (
    <div>
        <Header />
        <CoinDetails coinName={coinName} price={price} coinSymbol={coinSymbol} icon={icon}/>
    </div>
    )
}

export default Price