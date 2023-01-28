import { useState, useEffect } from "react"
import CoinDetails from "../../components/coinDetails"
import Header from "../../components/header"

const Price = () => {
    const [id, setId] = useState('');

    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        setId(Number(urlParams.get('id')));
    }

    return (
    <div>
        <Header />
            <CoinDetails id={id} />
    </div>
    )
}

export default Price