export default function handler(req,res) {
    const getTrendingNftCollections = async () => {
        const response = await fetch("https://opensea.io/rankings/trending", 
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

    getTrendingNftCollections();
}