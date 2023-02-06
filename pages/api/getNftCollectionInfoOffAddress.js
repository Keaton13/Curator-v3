export default function handler(req,res) {
    const getNftCollectionInfoOffAddress = async () => {
        const response = await fetch('https://api.opensea.io/api/v1/collections?asset_owner=0x8c96d1BC087191B2fD5963D792550CeFa7955210&offset=0&limit=300',
        {
            method: 'GET',
        },

        )

        const data =  await response.json();
        res.status(200).json({data})
    }

    getNftCollectionInfoOffAddress();
}