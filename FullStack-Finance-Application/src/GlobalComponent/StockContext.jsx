import React, { createContext, useContext, useState } from 'react'

const CreateStockContext = createContext();

const StockContext = ({ children }) => {
  const [toggleOperator, setToggleOperator] = useState(true);
  const [plusStockValue, setPlusStockValue] = useState(0);
  const [subStockValue, setSubStockValue] = useState(0);
  const [stockValue, setStockValue] = useState(0);

  const ToggleStockOperator = (toggleVal) => {
    setToggleOperator(toggleVal)
  }

  
  const PlusStock = (plusStock) => {
    const parseNum = Number(plusStock);
    console.log(parseNum);

    setPlusStockValue(prevVal => {
      const PlusValue = prevVal + parseNum
      localStorage.setItem("plusStock", PlusValue);
      console.log(PlusValue);
      return PlusValue;
    });

    setStockValue(prevVal => {
      const addValue = prevVal + parseNum;
      localStorage.setItem("totalStock", addValue); // Save after calculation
      console.log(addValue); // This will show the correct value
      return addValue;
    });
  }
  
  const SubStock = (subStock) => {
    const parseNum = Number(subStock);
    console.log(parseNum);

    setSubStockValue(prevVal => {
      const subValue = prevVal + parseNum
      localStorage.setItem("subStock", subValue);
      console.log(subValue);
      return subValue;
    });

    setStockValue(prevVal => {
      const subValue = prevVal - parseNum;
      localStorage.setItem("totalStock", subValue); // Save after calculation
      console.log(subValue); // This will show the correct value
      return subValue;
    });
  }

  return (
    <div>
      <CreateStockContext.Provider value={{ PlusStock, SubStock, ToggleStockOperator, toggleOperator }}>{children}</CreateStockContext.Provider>
    </div>
  )
}

export const useStockContext = () => {
  return useContext(CreateStockContext);
}

export default StockContext