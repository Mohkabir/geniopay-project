import React from 'react'
import { Link } from "react-router-dom";

import WalletSectionOne from './WalletSectionOne'
import { WalletSectionTwo } from './WalletSectionTwo'

const ScreenTwo = () => {
  return (
    <div className='screenTwo'>
      <div className='flex_between'>
        <h2>Your Wallet (s) </h2>
        <button><Link to="/">+ Create New Wallet</Link></button>
      </div>
      <section>
        <WalletSectionOne />
        <WalletSectionTwo />
      </section>
    </div>
  )
}

export default ScreenTwo