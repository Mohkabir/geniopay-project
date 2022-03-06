import React from 'react'

import chartimg1 from "../../assets/images/chartimg1.png"
import chartimg2 from "../../assets/images/chartimg2.png"
import chartimg3 from "../../assets/images/chartimg3.png"
import fullchart from "../../assets/images/fullchart.svg"



const Chart = () => {
  return (
    <div className='chart'>
      <div className='chart_info'>
        <div className='flex'>
          <img src={chartimg1} alt="chartimg1" />
          <div>
            <p>Total transactions</p>
            <p><strong>$88,600.00</strong></p>
          </div>
        </div>

        <div className='flex'>
          <img src={chartimg2} alt="chartimg1" />
          <div>
            <p>Pay-In</p>
            <p><strong>$4,600.00</strong></p>
          </div>
        </div>

        <div className='flex'>
          <img src={chartimg3} alt="chartimg1" />
          <div>
            <p>Pay-Out</p>
            <p><strong>$72,600.00</strong></p>
          </div>
        </div>
      </div>

      <div className='chart_image'>
        <img  src={fullchart} alt="fullchart" />
      </div>
    </div>
  )
}

export default Chart