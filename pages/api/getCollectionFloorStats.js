export default function handler(req,res) {
    const getCollectionFloorStats = async () => {
        const {collectionSlug} = req.body
        const response = await fetch(`https://api.opensea.io/api/v1/collection/${collectionSlug}/stats`, 
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

    getCollectionFloorStats();
}