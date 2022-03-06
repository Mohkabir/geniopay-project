import React from 'react'
import Card from './widget/Card'
import usaFlags from "../assets/images/usa_flags.png"
import australiaFlags from "../assets/images/australia_flags.png"
import ukFlags from "../assets/images/uk_flags.png"



const Wallet = () => {

  const wallets = [
    {
      title: "Personal account",
      currency: "USD",
      image: usaFlags,
      amount: "$10,250.00",
      background: "#FFF6E6"
    },
    {
      title: "EUR Wallet",
      currency: "EUR",
      image: australiaFlags,
      amount: "€4000.53",
      background: "#FBF1F0"
    },
    {
      title: "School fees",
      currency: "GBP",
      image: ukFlags,
      amount: "£50.00",
      background: "#DDECEF"
    }
  ]
  return (
    <div className='wallet'>
      <div className='wallet_head'>
        <h2>Wallet (5)</h2>
        <p className='text_secondary'>View all wallets</p>
      </div>
      <div className="card_wrapper">
        {wallets.map( (wallet, index) => (
          <Card  key={index} wallet={wallet} />
        ))}
      </div>
      
    </div>
  )
}

export default Wallet