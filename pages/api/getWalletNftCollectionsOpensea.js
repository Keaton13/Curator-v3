export default function handler(req,res) {
    const getWalletNftCollections = async () => {
        const {address} = req.body
        console.log(address);
        const response = await fetch(`https://api.opensea.io/api/v1/collections?asset_owner=${address}&offset=0&limit=300`, 
        {
            method: 'GET',
            headers: {
                Accept: '*/*'
            },
        },

        )

        const data = await response.json()

        res.status(200).json({data})
    }

    getWalletNftCollections();
}