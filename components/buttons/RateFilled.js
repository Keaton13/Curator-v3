import React from 'react'
import ChevronUp from '../../assets/svg/chevronUp'
import ChevronDown from '../../assets/svg/chevronDown';

const styles = {
    rateFilledGreen: `bg-green-600 flex items-center px-3 ml-3 rounded-xl text-lg`,
    rateFilledRed: `bg-red-600 flex items-center px-3 ml-3 rounded-xl text-lg`

}

const RateFilled = ({rate}) => {
  return (
    <div>
      {rate >= 0 ? (
        <div className={styles.rateFilledGreen}>
          <ChevronUp />
          <small className='pl-1'>{rate + "%"}</small>
        </div>
      ) : (
        <div className={styles.rateFilledRed}>
          <ChevronDown />
          <small className='pl-1'>{rate + "%"}</small>
        </div>
      )}
    </div>
  );
};

export default RateFilled