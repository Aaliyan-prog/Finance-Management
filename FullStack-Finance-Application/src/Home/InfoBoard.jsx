import React, { useEffect, useState } from 'react'
import "../assets/css/board.css"

const InfoBoard = () => {
  const [cosInfo, setCosInfo] = useState([]);
  const [sellInfo, setSellInfo] = useState([]);
  const [ExpenseInfo, setExpenseInfo] = useState([]);
  const [domesExpenInfo, setDomesExpenInfo] = useState([]);

  useEffect(() => {
    const fetchInfoData = async () => {
      try {
        const response = await fetch("http://localhost:4000/src/api/RevenueFrConn/RevenueFrConn.php")
  
        const result = await response.json();
        console.log(result);

        setCosInfo(result.cosTotals);
        setDomesExpenInfo(result.domesticExpenses);
        setExpenseInfo(result.expensePrices);
        setSellInfo(result.sellTotals);
      } catch (error) {
        console.log(error);
      }
    }
    fetchInfoData();
  }, []);

  console.log(cosInfo, sellInfo, domesExpenInfo, ExpenseInfo);

  let cosTotal = cosInfo.reduce((sum, item) => sum + (item.cosTotal || 0), 0);  
  let sellTotal = sellInfo.reduce((sum, item) => sum + (item.sellTotal || 0), 0);  
  let domesExpenPrice = domesExpenInfo.reduce((sum, item) => sum + (item.domesExpenPrice || 0), 0);  
  let expensePrice = ExpenseInfo.reduce((sum, item) => sum + (item.expensePrices || 0), 0);  

  const expenseTotal = domesExpenPrice + expensePrice;
  const revenue = sellTotal - (cosTotal + expenseTotal);
  const TotalExpenses = cosTotal + expenseTotal;

  console.log(expenseTotal, sellTotal);
  

  return (
    <div class="infoBoard">
      <div class="infoboard-content">
        <div class="each-category-info">
          <div class="cost-of-sell category-option">
            <h1>Rs: {cosTotal}</h1>
            <p>Cost of sell</p>
          </div>
          <div class="Expenses category-option">
            <h1>Rs: {expenseTotal}</h1>
            <p>Expenses</p>
          </div>
          <div class="sells category-option">
            <h1>Rs: {sellTotal}</h1>
            <p>Sell</p>
          </div>
          <div class="revenue category-option">
            <h1>Rs: {revenue}</h1>
            <p>Revenue</p>
          </div>
        </div>

        <div class="totalProfit-loss">
          <p>Total Profit</p>
          <div class="totalProfitLoss">
             {/* Sell / Cost of sell + expenses */}
            <h1>Rs: <span>{sellTotal}</span> / <span>{TotalExpenses}</span></h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoBoard