import React from 'react'
import WhaleStatsTableHeader from './WhaleStatsTableHeader'

const WhaleStatsTable = () => {
  return (
    <div className="text-white font-bold">
        <div className="mx-auto max-w-screen-2xl">
            <table className="w-full">
                <WhaleStatsTableHeader />
            </table>
        </div>
    </div>
  )
}

export default WhaleStatsTable