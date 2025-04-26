import React from 'react'
import { Link } from "react-router-dom"
import "../assets/css/style.css"
import { FaBars } from "react-icons/fa";
import { useBarToggleContext } from '../GlobalComponent/BarContext';

const Navbar = () => {
  const { barToggle, changeToggle } = useBarToggleContext()

  return (
    <div className={`${barToggle === false ? "container" : "container-Toggle"}`}>
      <div className="menubar">
        <div className="menuBar-header">
          {barToggle === false ? (
            <div className="title">
              <h1>FM</h1>
            </div>
          ) : null
          }
          {barToggle === false ? (
            <div className="close-menu">
              <FaBars className='closing-bar-nav-Option' onClick={() => changeToggle(true)}/>
            </div>
          ) : (
            <div className="opening-menu">
              <FaBars className='opening-bar-nav-Option' onClick={() => changeToggle(false)}/>
            </div>
          )

          }
        </div>
        <div className="menuBar-option">
          {barToggle === false ? (
            <ul>
              <div className="option-container">
                <li className="option">
                  <Link to="/">Home</Link>
                </li>
              </div>
              <div className="option-container">
                <li className="option">
                  <Link to="/Cost-Of-Sell">Cost of Sell</Link>
                </li>
              </div>
              <div className="option-container">
                <li className="option">
                  <Link to="/Expenses">Expenses</Link>
                </li>
              </div>
              <div className="option-container">
                <li className="option">
                  <Link to="/Sell">Sell</Link>
                </li>
              </div>
              <div className="option-container">
                <li className="option">
                  <Link to="/Revenue">Revenue</Link>
                </li>
              </div>
              <div className="option-container">
                <li className="option">
                  <Link to>Cash</Link>
                </li>
              </div>
            </ul>
          ) : null

          }
        </div>
      </div>
    </div>
  )
}

export default Navbar