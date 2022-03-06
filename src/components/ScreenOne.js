import React from 'react'

import Activity from './Activity'
import QuickLinks from './QuickLinks'
import Wallet from './Wallet'

const ScreenOne = () => {
  return (
    <div className='screenOne'>
      <Wallet />
      <QuickLinks />
      <Activity />
    </div>
  )
}

export default ScreenOne