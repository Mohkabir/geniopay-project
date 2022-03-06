import React, { useState } from 'react'

import Nav from './Nav'
import SideNav from './SideNav'
import menuBar from "../assets/images/bars-solid.svg"
import menuClose from "../assets/images/window-close-solid.svg"


const Layout = (props) => {

  const [ menu, setMenu] = useState(false);
  const handleMenu = () => {
    setMenu(!menu)
  }

  return (
    <div className='layout flex'>
      <div className={`${menu?'open':'close'}`}>
        <SideNav />
      </div>
      <div>
        <Nav title={props.title}/> 
         <img onClick={handleMenu} className="menuBar" src={menu? menuClose:menuBar} alt="menu bar" /> 
        <main>
          <div>
          {props.children}
          </div>
        </main>   
      </div>
    </div>
  )
}

export default Layout