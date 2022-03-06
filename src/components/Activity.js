import React from 'react'

import Chart from './widget/Chart'

const Activity = () => {
  return (
    <div className='activity'>
      <div className='flex_between'>
        <div  className='flex'>
          <h2>Activity</h2>
          <select name="" id="" className='text_secondary'>
            <option value="Month">Month</option>
            <option value="Day">Day</option>
          </select>
        </div>
        <p className='text_secondary'>View Transaction History</p>
      </div>
      <Chart />
    </div>
  )
}

export default Activity