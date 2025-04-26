import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import BarContext from './GlobalComponent/BarContext.jsx'
import StockContext from './GlobalComponent/StockContext.jsx'

createRoot(document.getElementById('root')).render(
    <BarContext>
      <StockContext>
        <App/>
      </StockContext>
    </BarContext>
)
