import React, { useState } from 'react'
import "../../assets/css/Sell/Stock/StockForm.css"
import StockForm from './StockForm'
import Navbar from '../../Component/navbar'
import NavbarOptionAdvan from '../../Component/NavbarOptionAdvan'
import axios from 'axios'
import { useStockContext } from "../../GlobalComponent/StockContext.jsx";

const StockFormSection = () => {
  const { PlusStock, SubStock, toggleOperator } = useStockContext();

  const initialStock = {
    stockName: "",
    stockCategory: "",
    stockPrice: "",
    stockQuantity: "",
    stockDate: "",
  }
  const [stockData, setStockData] = useState(initialStock)

  const HandleChange = (name, value) => {
    setStockData(preVal => ({
      ...preVal,
      [name]: value
    }))
  }

  const HandleStockSubmit = (e) => {
    e.preventDefault();
    setStockData(initialStock);

    axios.post("http://localhost:4000/src/controllers/Sell/Stock/Stock.php",
      stockData,
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    )
    .then(res => {
      console.log(res);
    }).catch(err => {
      console.error(err);
    })

    if (toggleOperator === true) {
      localStorage.setItem("addStockValueLS", stockData.stockQuantity);
      PlusStock(stockData.stockQuantity)
    } else if (toggleOperator === false) {
      localStorage.setItem("subStockValueLS", stockData.stockQuantity);
      SubStock(stockData.stockQuantity);
    }
  }

  return (
    <div className='menu-section'>
      <Navbar />
      <div className="main-section">
        <NavbarOptionAdvan LinkParam={"/sell"} />
        <div className="stockform">
          <h1>Stock form</h1>
          <form method="post" onSubmit={(event) => HandleStockSubmit(event)}>
            <StockForm HandleChange={HandleChange} stockData={stockData}/>
          </form>
        </div>
      </div>
    </div>
  )
}

export default StockFormSection