import React, { useState } from 'react'
import "../assets/css/style.css"
import "../assets/css/CostOfSell/CostFormSection.css"
import Navbar from '../Component/navbar'
import NavbarOptionAdvan from '../Component/NavbarOptionAdvan'
import CostOfSellEntryForm from './CostOfSellEntryForm'
import axios from "axios";


const CostOfSellEntry = () => {
  const intialFormState = {
    cosName: '',
    cosCategory: '',
    cosPrice: '',
    cosQuantity: '',
    cosDate: ''
  };
  
  const [formData ,setFormData] = useState(intialFormState)

  const handleChangeInput = (name, value) => {
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const HandleSubmit = (e) => {
    e.preventDefault()
    console.log("form Submitted with data: ", formData);
    setFormData(intialFormState);

    axios.post("http://localhost:4000/src/controllers/CostOfSell/CostOfSell.php", formData, {
      headers: {
        "Content-Type": "Application/json"
      }
    })
    .then(res => {
      console.log("Success: ", res);
      setFormData(intialFormState);
    }).catch(error => {
      console.log("Error: ", error);
      
    })

    // axios({
    //   method: "POST",
    //   url: "http://localhost:4000/index.php",
    //   data: {
    //     cosName: formData.cosName,
    //     cosCategory: formData.cosCategory,
    //     cosPrice: formData.cosPrice,
    //     cosQuantity: formData.cosQuantity,
    //     cosDate: formData.cosDate
    //   },
    //   headers: {
    //     "Content-Type": "Application/json"
    //   }
    // })
  }

  return (
    <div className='menu-section'>
      <Navbar />
      <div className="main-section">
        <NavbarOptionAdvan LinkParam={'/Cost-Of-Sell'}/>
        <div className="cos-form">
          <h1>COS Form</h1>
          <form method="POST" onSubmit={(event) => HandleSubmit(event)}>
            <CostOfSellEntryForm handleChangeInput={handleChangeInput} formData={formData}/>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CostOfSellEntry