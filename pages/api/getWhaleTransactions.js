export default function handler(req,res) {
    const getWhaleTransactions = async () => {
        const response = await fetch(`https://api.whale-alert.io/v1/transactions?api_key=aEhtUqSlRgn06iXo1AloB5yKYzdSAS1X&min_value=500000`, 
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

    getWhaleTransactions();
}