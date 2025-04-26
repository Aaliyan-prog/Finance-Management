import React, { useEffect, useState } from 'react'

const DomesExpenReportTable = ({ targetref}) => {
  const [domesExpen, setDomesExpen] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4000/src/api/ExpenseFrConn/DomesExpenFrConn.php")
    
        if(!response.ok){
          throw new Error("Network was not ok");
        }
    
        const result = await response.json();
        console.log(result);
        setDomesExpen(result);
      } catch (error) {
        console.log(error);  
      }
    }
    fetchData();
  }, []);


  return (
    <div className='expense-report-table'>
      <div className="report-table">
        <table ref={targetref}>
          <thead>
            <tr>
              <th>No</th>
              <th>Date</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {domesExpen.map((item) => (
              <tr key={item.domesExpenId}>
                <td>{item.domesExpenId}</td>
                <td>{item.domesExpenDate}</td>
                <td>{item.domesExpenName}</td>
                <td>{item.domesExpenCategory}</td>
                <td>{item.domesExpenPrice}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default DomesExpenReportTable