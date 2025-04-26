import React, { useState } from 'react'
import Navbar from '../Component/navbar'
import NavbarOptionAdvan from '../Component/NavbarOptionAdvan'
import DomesticExpenseform from './DomesticExpenseform'
import axios from "axios";

const Domesticform = () => {
  const initialDomesData = {
    domesName: '',
    domesCategory: '',
    domesPrice: '',
    domesDate: ''
  }

  const [domesexpenformData, setDomenExpenFormData] = useState(initialDomesData);

  const HandleDomesState = (name, value) => {
    setDomenExpenFormData(prevVal => ({
      ...prevVal,
       [name]: value
    }))
  }

  const HandleDomesFormSubmit = (e) => {
    e.preventDefault();

    setDomenExpenFormData(initialDomesData);

    axios.post("http://localhost:4000/src/controllers/Expenses/DomesticExpense.php", 
    domesexpenformData,
    {
      headers: {
        "Content-type": "application/json"
      }
    },
   ).then(res => {
    console.log("Success", res);
   }).catch(err => {
    console.log("Error: ", err)
   })
  }
  
  return (
    <div className='menu-section'>
      <Navbar />
      <div className="main-section">
        <NavbarOptionAdvan LinkParam={'/Expenses'} />
        <div className="Expenseform">
          <h1>Domestic Form</h1>
          <form method='post' onSubmit={(event) => HandleDomesFormSubmit(event)}>
            <DomesticExpenseform domesexpenformData={domesexpenformData} HandleDomesState={HandleDomesState}/>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Domesticform