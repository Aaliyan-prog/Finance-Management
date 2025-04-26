import React, { useEffect, useState } from 'react'

const StockReport = ({ targetRef }) => {
  const [stockFrDb, setStockFrDb] = useState([])

  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const response = await fetch("http://localhost:4000/src/api/sellFrConn/StockFrConn/StockFrConn.php");

        const result = await response.json()
        setStockFrDb(result);
        // console.log(stockFrDb, result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchStockData();
  }, []);

  return (
    <div className='stock-report-table'>
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
            {stockFrDb.map((item) => (
              <tr key={item.stockId}>
                <td>{item.stockId}</td>
                <td>{item.stockDate}</td>
                <td>{item.stockName}</td>
                <td>{item.stockCategory}</td>
                <td>{item.stockPrice}</td>
                <td>{item.stockQuantity}</td>
              </tr>
            ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default StockReport