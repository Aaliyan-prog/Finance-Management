import React from 'react'
import "../assets/css/style.css"
import { IoIosSettings } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";

const NavbarOption = () => {
  return (
      <div class="main-option">
        <div class="mini-navbar">
          <div class="setting-icon">
            <IoIosSettings className='settingIcon'/>
          </div>
          <div class="account-Profile-icon">
            <FaUserCircle className='accountProfileIcon'/>
          </div>
        </div>
      </div>
  )
}

export default NavbarOption