import React, { createContext, useContext, useState } from 'react'

const createBarToggleContext = createContext();

const BarContext = ({children}) => {
  const [barToggle, setBarToggle] = useState(false);

  const changeToggle = (TogVal) => {
    setBarToggle(TogVal)
  }

  console.log(barToggle);
  
  return (
    <createBarToggleContext.Provider value={{ barToggle, changeToggle }}>{children}</createBarToggleContext.Provider>
  )
}

export const useBarToggleContext = () => {
  return useContext(createBarToggleContext)
}

export default BarContext