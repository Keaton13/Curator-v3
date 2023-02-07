export default function handler(req,res) {
    const getTrendingNftCollections = async () => {
        const response = await fetch('https://api.nft-stats.com/json_data/collections-24h',
        {
            method: 'GET',
        },

        )

        const data =  await response.json();
        res.status(200).json({data})
    }

    getTrendingNftCollections();
}