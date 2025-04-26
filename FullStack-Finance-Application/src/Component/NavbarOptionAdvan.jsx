import React from 'react'
import "../assets/css/style.css"
import "../assets/css/CostOfSell/COSform.css"
import { IoIosSettings } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';

const NavbarOptionAdvan = ({LinkParam}) => {
  return (
      <div class="main-option-cos-entry">
        <Link className="back-arrow-icon-cos" to={LinkParam}>
          <FaArrowLeft />
        </Link>
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

export default NavbarOptionAdvan