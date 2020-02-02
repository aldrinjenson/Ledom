import React, { Component, useContext } from "react";
import Navbar from "../Navbar";
import DisplayMessage from "../DisplayMessage";
import WriteMessage from "../WriteMessage";
import uuid from "uuid/v1";
import { MessageContext } from "../../contexts/MessageContexts";

const PersonC = () => {
    const addMsg = (msg) =>{
      const {messages} = this.state
      this.setState({
        messages:[{msg,id:uuid()}]
      })
    }

  const { messages } = useContext(MessageContext)

  console.log(messages);
  return (
    <div>
      
      <Navbar person="C" />
      <div className="main container">
        <div className="message-window right">
          Forwarded Message:
          {messages.map(msg=><p>{msg.title}</p>)}
        </div>
        <WriteMessage addMsg={addMsg} />
      </div>
    </div>
  );
};

export default PersonC;
