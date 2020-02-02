import React, { createContext, useState } from "react";

export const BContext = createContext()

const BContextProvider = props => {
    const [messageB, setMessageB] = useState([
    ]);
  
    return (
      <BContext.Provider value={{ messageB,setMessageB }}>
        {props.children}
      </BContext.Provider>
    );
  };
  
  export default BContextProvider;
  