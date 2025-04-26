import React from 'react'

const Sellformcontent = ({ HandleSellData, sellData }) => {
  const HandleSellInputChange = (e) => {
    const {name, value} = e.target;
    HandleSellData(name, value);
  }

  return (
    <div className="sell-form-content">
      <div className="first-sec">
        <div className="sell-name-section sell-input-section">
          <label htmlFor="sellName">Name</label>
          <input 
            type="text" 
            name='sellName' 
            id='sellName' 
            value={sellData.sellName}
            onChange={HandleSellInputChange}
            placeholder='Enter Name'
            />
        </div>
        
        <div className="sell-category-section sell-input-section">
          <label htmlFor="sellCategory">Category</label>
          <input 
            type="text" 
            name='sellCategory' 
            id='sellCategory' 
            value={sellData.sellCategory}
            onChange={HandleSellInputChange}
            placeholder='Enter Category'
            />
        </div>
      </div>

      <div className="second-sec">
        <div className="sell-price-section sell-input-section">
          <label htmlFor="sellPrice">Price</label>
          <input 
            type="number" 
            name='sellPrice' 
            id='sellPrice' 
            value={sellData.sellPrice}
            onChange={HandleSellInputChange}
            placeholder='Enter Price'
            />
        </div>
        <div className="sell-quantity-section sell-input-section">
          <label htmlFor="sellQuantity">Quantity</label>
          <input 
            type="number" 
            name='sellQuantity' 
            id='sellQuantity' 
            value={sellData.sellQuantity}
            onChange={HandleSellInputChange}
            placeholder='Enter Quantity'
            />
        </div>
      </div>

      <div className="third-sec">
        <div className="sell-date-section sell-input-section">
          <label htmlFor="sellDate">Date</label>
          <input
            type="date"
            name='sellDate'
            value={sellData.sellDate}
            onChange={HandleSellInputChange}
            id='sellDate'
          />
        </div>
      </div>

      <div className="last-section sell-input-section">
        <button>Submit</button>
      </div>
    </div>
  )
}

export default Sellformcontent