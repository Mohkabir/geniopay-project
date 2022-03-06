import React from 'react'

import planted from "../assets/images/planted.png"
import notification from "../assets/images/notification.png"
import profle from "../assets/images/profle.png"
import caretDown from "../assets/images/caret_downr.png"
import Input from './widget/Input'


const Nav = ({title}) => {

  return (
    <nav className='nav flex_align_start'>
      <h1>{title}</h1>
      <div className='flex_align_start'>
        <div className="search">
          <Input type="text" placeholder='Search'/>
        </div>
        
        <div className='flex_between'>
          <img src={planted} alt="planted" />
          <p className='mx_5'>0 planted</p>
          <img src={notification} alt="notification" />
        </div>
        <div className='flex_align_center'>
          <img src={profle} alt="profile" />
          <div>
            <small>Verified</small>
            <p>Huss Smith</p> 
          </div>
          <img src={caretDown} alt="caret down" />
        </div>
      </div>
    </nav>
  )
}

export default Nav