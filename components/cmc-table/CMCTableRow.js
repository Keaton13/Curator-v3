import Image from 'next/image'
import More from '../../assets/svg/more'
import Star from '../../assets/svg/star'
import CoinNameRow from '../CoinNameRow'
import Rate from './Rate'
import { useRouter } from 'next/router'

const styles = {
  tableRow: `text-white border-b border-gray-800 lg:text-[0.93rem]`,
  rowHeight: `lg:h-[75px] h-[150px] xs:text-2xl`
}

const CMCtableRow = ({
  id,
  starNum,
  coinName,
  coinIcon,
  coinSymbol,
  price,
  hour1,
  hour24,
  dayRate,
  marketCapValue,
  volumeValue,
  volumeInCoin,
  volumeCryptoValue,
  circulatingSupply
}) => {

  const router = useRouter()

  const viewCoinDetails = () => {
    router.push(
      `/currencies/info?id=${id}`,
    )
  }

  const viewPrice = () => {
    router.push(
      `/currencies/price?id=${id}`,
    )
  }

  const formatNum = num => {
    return Number(num.toFixed(2)).toLocaleString()
  }

  return (
    <tbody className={styles.tableRow}>
      <tr className={styles.rowHeight}>
        <td>
          <Star />
        </td>
        <td>{starNum}</td>

        {coinIcon && coinIcon ? (
          <td className='cursor-pointer'>
            <CoinNameRow
              name={coinName}
              icon={coinIcon}
              clicked={viewCoinDetails}
            />
          </td>
        ) : (
          <></>
        )}

        <td className='cursor-pointer' onClick={viewPrice}>
          <p>${formatNum(price)}</p>
        </td>
        <td>
          <Rate rate={`${formatNum(hour1)}%`} />
        </td>
        <td>
          <Rate rate={`${formatNum(hour24)}%`} />
        </td>
        <td>
          <Rate rate={`${formatNum(dayRate)}%`} />
        </td>

        <td>
          <div>
            <p>${formatNum(marketCapValue)}</p>
          </div>
        </td>

        <td>
          <div>
            <p>${formatNum(volumeCryptoValue)}</p>
            <p className='text-gray-400'>
              {formatNum(volumeInCoin)}&nbsp;{coinSymbol}
            </p>
          </div>
        </td>

        <td>
          <div>
            <p className='float-right mr-3'>{formatNum(circulatingSupply)}&nbsp;{coinSymbol}</p>
          </div>
        </td>

        <td>
          <Image src={`https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/${id}.svg`} width={150} height={100} alt='test' />
        </td>

        <td>
          <More />
        </td>
      </tr>
    </tbody>
  )
}

export default CMCtableRow