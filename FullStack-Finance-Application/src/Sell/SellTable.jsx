import React, { useEffect, useState } from 'react';
import "../assets/css/Sell/sellReport.css"


const SellTable = ({ targetRef }) => {
  const [sellFrDb, setSellFrDb] = useState([])

  useEffect(() => {
    const fetchSellData = async () => {
      try {
        const response = await fetch("http://localhost:4000/src/api/sellFrConn/sellFrConn.php");

        const result = await response.json()
        setSellFrDb(result);
        console.log(sellFrDb, result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchSellData();
  }, [])

  return (
    <div className='sell-report-table'>
      <div className="report-table">
        <table ref={targetRef}>
          <thead>
            <tr>
              <th>No</th>
              <th>Date</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {sellFrDb.map((item) => (
              <tr key={item.sellId}>
                <td>{item.sellId}</td>
                <td>{item.sellDate}</td>
                <td>{item.sellName}</td>
                <td>{item.sellCategory}</td>
                <td>{item.sellPrice}</td>
                <td>{item.sellQuantity}</td>
              </tr>
            ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default SellTable