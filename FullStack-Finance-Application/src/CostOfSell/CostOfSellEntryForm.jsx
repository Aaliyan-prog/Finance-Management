import React from 'react'
import "../assets/css/CostOfSell/CostFormSection.css"

const CostOfSellEntryForm = ({ handleChangeInput, formData }) => {
  const HandleChange = (e) => {
    const {name, value} = e.target
    handleChangeInput( name, value );
  }

  return (
    <div className='cos-form-content'>
      <div className="first-sec">
        <div className="cos-name-section cos-input-section">
          <label htmlFor="cos-name">Name</label>
          <input 
          type="text" 
          name='cosName' 
          id='cosName'
          value={formData.cosName}
          onChange={HandleChange}
          placeholder='Enter Name'
          />
        </div>
        <div className="cos-category-section cos-input-section">
          <label htmlFor="cos-category">Category</label>
          <input 
          type="text" 
          name='cosCategory' 
          id='cosCategory'
          value={formData.cosCategory}
          onChange={HandleChange}
          placeholder='Enter Category'
          />
        </div>
      </div>
      <div className="second-sec">
        <div className="cos-price-section cos-input-section">
          <label htmlFor="cos-price">Price</label>
          <input 
          type="number" 
          name="cosPrice" 
          id="cosPrice"
          value={formData.cosPrice}
          onChange={HandleChange}
          placeholder='Enter price' 
          />
        </div>
        <div className="cos-quantity-section cos-input-section">
          <label htmlFor="cos-quantity">Quantity</label>
          <input 
          type="number" 
          name="cosQuantity" 
          id="cosQuantity"
          value={formData.cosQuantity}
          onChange={HandleChange}
          placeholder='Enter Quantity' 
          />
        </div>
      </div>
      <div className="third-sec">
        <div className="cos-date-section cos-input-section">
          <label htmlFor="cos-date">Date</label>
          <input 
          type="date" 
          name="cosDate" 
          id="cosDate"
          value={formData.cosDate}
          onChange={HandleChange}
          />
        </div>
      </div>
      <div className="last-section">
        <button className="submit-cos-form-button">Submit</button>
      </div>
    </div>
  )
}

export default CostOfSellEntryForm