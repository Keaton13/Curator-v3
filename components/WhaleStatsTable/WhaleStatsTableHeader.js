import React from 'react'
import ChevronDown from '../../assets/svg/chevronDown'

const WhaleStatsTableHeader = () => {
  return (
    <tbody>
        <tr>
            <th></th>
            <th className='flex items-center'><b># &nbsp;</b><ChevronDown /></th>
            <th>Blockchain</th>
            <th>Amount</th>
            <th>Amount USD</th>
            <th>From</th>
            <th>Type</th>
            <th>To</th>
            <th>Type</th>
        </tr>
    </tbody>
  )  
}

export default WhaleStatsTableHeader