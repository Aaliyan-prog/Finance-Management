import React, { useState } from 'react'
import "../assets/css/Sell/sellForm.css"
import Navbar from '../Component/navbar'
import NavbarOptionAdvan from '../Component/NavbarOptionAdvan'
import Sellformcontent from './sellformcontent'
import axios from 'axios'

const Sellform = () => {
  const initialSellData = {
    sellName: "",
    sellCategory: "",
    sellPrice: "",
    sellQuantity: "",
    sellDate: ""
  }

  const [sellData, setSellData] = useState(initialSellData);


  const HandleSellData = (name, value) => {
    setSellData(prevVal => ({
      ...prevVal,
      [name]: value
    }))
  }

  const HandleSellSubmit = (e) => {
    e.preventDefault();
    setSellData(initialSellData)
    
    axios.post(
      "http://localhost:4000/src/controllers/Sell/Sell.php",
      sellData,
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    )
    .then(res => {
      console.log(res)
    }).catch(err => {
      console.error(err)
    })
  }

  return (
    <div className='menu-section'>
      <Navbar/>
      <div className="main-section">
        <NavbarOptionAdvan LinkParam={"/sell"}/>
        <div className="sellform">
          <h1>Sell form</h1>
          <form method="post" onSubmit={(event) => HandleSellSubmit(event)}>
            <Sellformcontent HandleSellData={HandleSellData} sellData={sellData}/>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Sellform