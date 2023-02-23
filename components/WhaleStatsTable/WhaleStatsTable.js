import React from 'react'
import WhaleStatsTableHeader from './WhaleStatsTableHeader'
import WhaleStatsTableRow from './WhaleStatsTableRow';

const WhaleStatsTable = ({whaleTransactions}) => {
  return (
    <div className="text-white font-bold">
        <div className="mx-auto max-w-screen-2xl">
            <table className="w-full">
                <WhaleStatsTableHeader />
                {whaleTransactions ? (
                  whaleTransactions.map((transaction, index) => {
                    console.log(transaction)
                    return (
                      <WhaleStatsTableRow transaction={transaction} index={index + 1}/>
                    )
                  })
                ) : (
                  <div>Loading...</div>
                )}
            </table>
        </div>
    </div>
  )
}

export default WhaleStatsTable