import React from 'react'

const styles = {
    tableHeader:  `flex items-start`
}

const NftTableHeader = () => {
  return (
    <thead class="bg-gray-800">
    <tr class="text-xs text-gray-400">
      <th class="w-4/6 px-4 py-2">Collection</th>
      <th class="w-2/6 px-4 py-2">Floor Price</th>
      <th class="w-2/6 px-4 py-2">Volume</th>
    </tr>
  </thead>
  )
}

export default NftTableHeader