import React from 'react'

import Input from './widget/Input'
import usaFlags from "../assets/images/usa_flags.png"
import australiaFlags from "../assets/images/australia_flags.png"
import ukFlags from "../assets/images/uk_flags.png"

const WalletSectionOne = () => {
  return (
    <div className='walletSectionOne'>
      <div className='head flex_between'>
        <div>
          <Input type="text" placeholder='Search'/>
        </div>
        <select name="" id="">
          <option value="all">All</option>
        </select>
      </div>
      <ul className='my-20'>
        <li className='active_subnav'>Active (3)</li>
        <li>Inactive (2)</li>
        <li>Closed (0)</li>
      </ul>
      <div className='active_data'>
        <div className='default'>
          <div className='flex'>
            <img src={australiaFlags} alt="usa flags" />
            <div>
              <p>EUR Wallet</p>
              <p>EUR</p>
            </div>
          </div>
          <div className='right'>
            <p>€2,000,000.50</p>
            <small>Default</small>
          </div>
        </div>

        <div>
          <div className='flex'>
            <img src={usaFlags} alt="australia flags" />
            <div>
              <p>Personal account</p>
              <p>USD</p>
            </div>
          </div>
          <div>
            <p>$10,250.00</p>
          </div>
        </div>

        <div>
          <div className='flex'>
            <img src={ukFlags} alt="uk flags" />
            <div>
              <p>Personal account</p>
              <p>USD</p>
            </div>
          </div>
          <div>
            <p>$10,250.00</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default WalletSectionOne