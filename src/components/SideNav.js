import React, { useEffect, useState } from 'react'
import {
  Link,
  useLocation
} from "react-router-dom";

import logo from "../assets/images/logo.png"
import wallet_icon from "../assets/images/wallet_icon.png"
import star from "../assets/images/star.png"
import eye from "../assets/images/eye.png"
import dahsboard_icon from "../assets/images/dahsboard_icon.png"
import dash_wallet from "../assets/images/dash_wallet.png"
import dash_card from "../assets/images/dash_card.png"
import dollarSquare from "../assets/images/dollar-square.png"
import tag from "../assets/images/tag.png"
import profile2user from "../assets/images/profile-2user.png"
import speaker from "../assets/images/speaker.png"
import walletactive from "../assets/images/walletactive.png"
import defaultdashboard from "../assets/images/defaultdashboard.png"

const SideNav = () => {

  const [isWalletActive, setIsWalletActive] = useState(false)
  const [isDefaultActive, setIsDefaultActive] = useState(true)
  const location = useLocation().pathname

  useEffect(()=> {
    if(location === "/wallet"){
      setIsWalletActive(true)
      setIsDefaultActive(false)
    }else{
      setIsWalletActive(false)
      setIsDefaultActive(true)
    }
  }, [location])
  
  return (
    <aside>
      <div className='side_wrapper'>
        <div className='center'>
          <img src={logo} alt="logo" />
        </div>    
        <div className='balance'>
          <div className='flex_between'>  
            <div className='flex'>
              <img className='wallet_icon' src={wallet_icon} alt="wallet_icon" />
              <div className='inline'>
                <p>Wallet Balance</p>
                <p><strong>$15,001.00</strong></p>
              </div>
            </div>
            <img src={eye} alt="eye logo" />
          </div>
          <div> 
            <img src={star} className='wallet_icon' alt="star" /> 
            <div className='inline'>
              <p>Awarded Points</p>
              <p><strong>35</strong></p>
            </div>
          </div>
          <div className='flex_between'>
            <button>Pay-In</button>
            <button>Pay-Out</button>
          </div>
        </div>
        <div className='dashboard'>
          <ul className='dash_body'>
            <li className={`head ${isDefaultActive? "active":""}`}>
              <Link to="/">
                <img src={`${isDefaultActive? dahsboard_icon:defaultdashboard}`} alt="dahsboard_icon" />
                <h3 className='inline'>Dashboard</h3>
              </Link>
            </li>
            <li className={`${isWalletActive? "active":""}`}>
              <Link to="/wallet">
                <img src={`${isWalletActive? walletactive:dash_wallet}`} alt="dash_wallet" />
                <p>Wallet</p>
              </Link>
            </li>
            <li>
              <Link to="/">
                <img src={dash_card} alt="dash_card" />
                <p>Cards</p>
              </Link>
            </li>
            <li>  
              <Link to="/">
                <img src={dollarSquare} alt="dollarSquare" />
                <p>FX Centre</p>
              </Link>
            </li>
            <li> 
              <Link to="/">
                <img src={profile2user} alt="profile2user" />
                <p>Beneficiaries</p>
              </Link>
            </li>
            <li> 
              <Link to="/">
                <img src={tag} alt="tag" />
                <p>Perks</p>
              </Link>
            </li>
          </ul>
        </div>
        <div className='refer'>
          <div className='flex'>
            <img src={speaker} alt="speaker" />
            <div>
              <h4>Refer and earn</h4>
              <p>Use the below link to invite friends</p>
            </div>
          </div>
          <button>Invite Friends</button>
        </div>
      </div>
    </aside>
  )
}

export default SideNav