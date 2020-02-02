import React, { Component,useContext } from "react";
import Navbar from "../Navbar";
import DisplayMessage from "../DisplayMessage";
import WriteMessage from "../WriteMessage";
import uuid from 'uuid/v1'
// import { BContext } from "../../contexts/BContext";

export class PersonA extends Component {

  state = {
    messages: [
      { msg: "HEllo", id: 1 },
      { msg: "Hi", id: 2 }
    ]
  };

  addMsg = (msg) =>{
    const {messages} = this.state

    // const {messageB, setMessageB} = useContext(BContext)
    // setMessageB([...messageB],{msg:msg,id:uuid})
    
    this.setState({
      messages:[...messages,{msg,id:uuid()}]
    })
  }


  render() {
    const {messages} = this.state
    return (
      <div>
        <Navbar person="A" />
        <p>Chatting with PersonB</p>
        <div className="main container">
            <div className='message-window right'>
                {messages.map(message=>{
                  return(
                    <DisplayMessage key={message.id} message={message}/>
                  )
                })}
            </div>
            <WriteMessage addMsg={this.addMsg}/>
        </div>
    </div>
    );
  }
}

export default PersonA;
