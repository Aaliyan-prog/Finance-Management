import React, { useEffect, useState } from 'react'
import "../assets/css/CostOfSell/COSReport.css";

const CostOfSellReportTable = ({ targetRef }) => {
  const [data, setData] = useState([]);

  useEffect(()=> {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4000/src/api/cosFrConn/cosFrConn.php');

        if(!response.ok){
          throw new Error("Network was not ok");
        }

        const result = await response.json();
        console.log(result);
        setData(result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
    console.log(data);
  }, []);
  
  console.log(data);
  return (
    <div className='cos-report-table'>
      <div className="report-table">
        <table  ref={targetRef}>
          <thead>
            <tr>
              <th>No</th>
              <th>Date</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.cosId}>
                <td>{item.cosId}</td>
                <td>{item.cosDate}</td>
                <td>{item.cosName}</td>
                <td>{item.cosCategory}</td>
                <td>{item.cosPrice}</td>
                <td>{item.cosQuantity}</td>
                <td>{item.cosTotal}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default CostOfSellReportTable