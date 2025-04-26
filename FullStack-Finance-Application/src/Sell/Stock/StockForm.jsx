import React, { useState } from 'react'
import { IoAddOutline } from "react-icons/io5";
import { RiSubtractFill } from "react-icons/ri";
import { useStockContext } from "../../GlobalComponent/StockContext.jsx";

const StockForm = ({ HandleChange, stockData }) => { 
  const { ToggleStockOperator } = useStockContext();
  
  const [toggleOparatorValue, setToggleOperatorValue] = useState(true);

  const HandleStockInputChange = (e) => {
    const {name, value} = e.target;
    HandleChange(name, value);
  }


  const HandleToogleOperators = (toggleVal) => {
    setToggleOperatorValue(toggleVal);
    ToggleStockOperator(toggleVal);
  }

  return (
    <div className="stock-form-content">
      <div className="first-sec">
        <div className="stock-name-section stock-input-section">
          <label htmlFor="stockName">Name</label>
          <input
            type="text"
            name='stockName'
            id='stockName'
            value={stockData.stockName}
            onChange={HandleStockInputChange}
            placeholder='Enter Name'
          />
        </div>

        <div className="stock-category-section stock-input-section">
          <label htmlFor="stockCategory">Category</label>
          <input
            type="text"
            name='stockCategory'
            id='stockCategory'
            value={stockData.stockCategory}
            onChange={HandleStockInputChange}
            placeholder='Enter Category'
          />
        </div>
      </div>

      <div className="second-sec">
        <div className="stock-price-section stock-input-section">
          <label htmlFor="stockPrice">Price</label>
            <input
              type="number"
              name='stockPrice'
              id='stockPrice'
              value={stockData.stockPrice}
              onChange={HandleStockInputChange}
              placeholder='Enter Price'
            />
        </div>

        <div className="stock-quantity-section stock-input-section">
          <label htmlFor="stockQuantity">Quantity</label>
          <div className="stock-quantity-input-section">
            <input
              type="number"
              name='stockQuantity'
              id='stockQuantity'
              value={stockData.stockQuantity}
              onChange={HandleStockInputChange}
              placeholder='Enter Quantity'
            />
            {toggleOparatorValue === true ? (
              <div className="Add-icon" onClick={() => HandleToogleOperators(false)}>
                <IoAddOutline />
              </div>
            ) : (
              <div className="sub-icon" onClick={() => HandleToogleOperators(true)} >
                <RiSubtractFill />
              </div>
            )
          }
          </div>
        </div>
      </div>

      <div className="third-sec">
        <div className="stock-date-section stock-input-section">
          <label htmlFor="stockDate">Date</label>
          <input
            type="date"
            name='stockDate'
            id='stockDate'
            value={stockData.stockDate}
            onChange={HandleStockInputChange}
          />
        </div>
      </div>

      <div className="last-section stock-input-section">
        <button>Submit</button>
      </div>
    </div>
  )
}

export default StockForm