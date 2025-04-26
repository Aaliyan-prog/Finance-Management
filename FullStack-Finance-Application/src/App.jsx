import { useState } from 'react'
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom"
import './App.css'
import Home from './Home/Home'
import CostOfSell from './CostOfSell/CostOfSell'
import CostOfSellEntry from './CostOfSell/CostOfSellEntry'
import CostOfSellReport from './CostOfSell/CostOfSellReport'
import Expenses from './Expenses/Expenses'
import ExpensesEntry from './Expenses/ExpensesEntry'
import ExpensesReport from './Expenses/ExpensesReport'
import Domesticform from './Expenses/Domesticform'
import DomesticReport from './Expenses/DomesticReport'
import Sell from './Sell/Sell'
import Sellform from './Sell/sellform'
import SellReport from './Sell/sellReport'
import StockFormSection from './Sell/Stock/StockFormSection'
import StockReportSection from './Sell/Stock/StockReportSection'
import Revenue from './Revenue/Revenue'

const AppLayout = () => {
  return(
    <div>
      <Outlet/>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/Cost-Of-Sell",
        element: <CostOfSell/>,
      },
      {
        path: "/Cost-Of-Sell/cost-of-sell-entry",
        element: <CostOfSellEntry/>
      },
      {
        path: "/Cost-Of-Sell/COS-Report",
        element: <CostOfSellReport/>
      },
      {
        path: "/Expenses",
        element: <Expenses/>
      },
      {
        path: "/Expenses/Expense-Entry",
        element: <ExpensesEntry/>
      },
      {
        path: "/Expenses/Expenses-report",
        element: <ExpensesReport/>
      },
      {
        path: "/Expenses/Domestic-expense-entry",
        element: <Domesticform/>
      },
      {
        path: "/Expenses/Domestic-expense-Report",
        element: <DomesticReport/>
      },
      {
        path: "/Sell",
        element: <Sell/>
      },
      {
        path: "/sell/sell-entry",
        element: <Sellform/>
      },
      {
        path: "/sell/sell-report",
        element: <SellReport/>
      },
      {
        path: "/sell/stock-entry",
        element: <StockFormSection/>
      },
      {
        path: "/sell/stock-report",
        element: <StockReportSection/>
      },
      {
        path: "/Revenue",
        element: <Revenue/>
      }
    ]
  }
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
