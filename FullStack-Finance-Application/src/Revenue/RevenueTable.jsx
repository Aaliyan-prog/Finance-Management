import React, { useEffect, useState } from 'react'

const RevenueTable = ({targetRef}) => {
  const [cosData, setCosData] = useState([]);
  const [sellData, setSellData] = useState([]);
  const [expenData, setExpenseData] = useState([]);
  const [domesExpenData, setDomesExpenData] = useState([]);

  const currentmonth = new Date().getMonth();

  function generateMarchDates (year = new Date().getFullYear()) {
    try {
      const dates = [];
      const startDate = new Date(year, currentmonth, 1);
      const endDate = new Date(year, currentmonth + 1, 0);
  
      for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)){
        dates.push(new Date(d).toISOString().split("T")[0]);
      }
  
      return dates;
    } catch (error) {
      console.error("Error generating dates:", err);
      return [];
    }
  }

  const createDateMap = (data, datekey, valuekey) => {
    try {
      if (!Array.isArray(data)) {
        console.warn(`Expected array for data but got:`, typeof data);
        return {};
      }

      return data.reduce((acc, item) => {
        try {
          const date = item?.[datekey];
          const value = item?.[valuekey];

          if (date && value !== undefined) {
            acc[date] = value;
          }
          return acc;
        } catch (itemErr) {
          console.warn("Error processing item:", item, itemErr);
          return acc;
        }
      }, {});
    } catch (err) {
      console.error("Error creating date map:", err);
      return {};
    }
  }

  useEffect(() => {
    const fetchData = async () => {
    try {
          const response = await fetch("http://localhost:4000/src/api/RevenueFrConn/RevenueFrConn.php");
      if (!response.ok) throw new Error("HTTP error");
          // First get the response as text to inspect it
          const responseText = await response.json();
          // // Try to parse it as JSON
          // let result;
          // try {
          //   result = JSON.parse(responseText);
          // } catch (parseError) {
          //   console.error('Failed to parse JSON:', parseError);
          //   throw new Error('Invalid JSON response from server');
          // }

          // console.log('Parsed result:', result);

          // setCosData(result.cosTotals || []);
          // setSellData(result.sellTotals || []);
          // setExpenseData(result.expensePrices || []);
          // setDomesExpenData(result.domesticExpenses || []);
            setCosData(responseText.cosTotals);
            setSellData(responseText.sellTotals);
            setExpenseData(responseText.expensePrices);
            setDomesExpenData(responseText.domesticExpenses);
          } catch (error) {
            console.log(error);
          }
        }
        fetchData();
  }, []);

  // console.log(cosData[0].cosTotal, sellData, expenData, domesExpenData);


  // Create date maps for each data type
  const cosMap = createDateMap(cosData, 'cosDate', 'cosTotal');
  const sellMap = createDateMap(sellData, 'sellDate', 'sellTotal');
  const expenMap = createDateMap(expenData, 'expenseDate', 'expensePrice');
  const domesExpenMap = createDateMap(domesExpenData, 'domesExpenDate', 'domesExpenPrice');
  
  let dateArray = generateMarchDates();

  console.log(dateArray);
  
  return (
    <div className='Revenue-report-table'>
      <div className="report-table">
        <table ref={targetRef}>
          <thead>
            <tr>
              <th>Date</th>
              <th>Cos Total</th>
              <th>Expense Total</th>
              <th>D Expense Total</th>
              <th>Sell Total</th>
            </tr>
          </thead>
          <tbody>
            {dateArray.map((date) => {
              // Safely get values with fallbacks
              const cosValue = cosMap?.[date] ?? '';
              const expenValue = expenMap?.[date] ?? '';
              const domesExpenValue = domesExpenMap?.[date] ?? '';
              const sellValue = sellMap?.[date] ?? '';

              // Only show row if at least one column has data
              const shouldRenderRow = cosValue || expenValue || domesExpenValue || sellValue;

              return shouldRenderRow ? (
                <tr key={date}>
                  <td>{date}</td>
                  <td>{cosValue}</td>
                  <td>{expenValue}</td>
                  <td>{domesExpenValue}</td>
                  <td>{sellValue}</td>
                </tr>
              ) : null;
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default RevenueTable