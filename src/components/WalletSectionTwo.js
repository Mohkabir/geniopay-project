import React from 'react'

import p1 from "../assets/images/p1.png"
import p2 from "../assets/images/p2.png"
import p3 from "../assets/images/p3.png"



import {
  Link
} from "react-router-dom";
import Chart from './widget/Chart';

export const WalletSectionTwo = () => {
  return (
    <div className='walletSectionTwo'>
        <div className="wrapper_box2">
 
        <div className='flex_between box1'>
          <div>
            <small>Active</small>
            <p>EUR Wallet</p>
            <p>EUR</p>
          </div>
          <strong>€2,000,000.50</strong>
        </div>

        <div className='flex_between'>
          <div>
            <p>Ledger Balance</p>
            <p>Blocked Balance</p>
          </div>
          <div>
            <p> 2,000,000.50</p>
            <p>€0.00</p>
          </div>
          <div>
            <p>Total Incoming</p>
            <p>Total Outgoing</p>
          </div>
          <div>
            <p>€2,000,000.50</p>
            <p>€5,000,000.50</p>
          </div>
        </div>

        <div className="btn_group flex_between">
          <button><Link to="/"><img src={p1} alt="Payment" /> Payment</Link></button>
          <button><Link to="/"><img src={p2} alt="Pay In" /> Pay In</Link></button>
          <button><Link to="/"><img src={p3} alt="Exchange" /> Exchange</Link></button>
        </div>
        <div>
          <select name="" id="">
            <option value="MoreOptions">More Options</option>
          </select>
        </div>
        <ul>
          <li className='active_subnav'>Active</li>
          <li>Transactions</li>
          <li>Invoices</li>
        </ul>
        <div style={{textAlign: "right"}}>
          <select name="" id="">
            <option value="Month">Month</option>
          </select>
        </div>
        <Chart />
      </div>
    </div>
  )
}
