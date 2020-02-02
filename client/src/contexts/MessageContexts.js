import React, { createContext, useState } from "react";

export const MessageContext = createContext()

const MessageContextProvider = props => {
    const [messages, setMessages] = useState([
      { title: "Hello",from:null, id: 1 },
      { title: "",from:null, id: 2 },
      // { title: "The Final Empire", id: 3 },
      // { title: "The hero of Ages", id: 4 }
    ]);
  
    return (
      <MessageContext.Provider value={{ messages,setMessages }}>
        {props.children}
      </MessageContext.Provider>
    );
  };
  
  export default MessageContextProvider;
  