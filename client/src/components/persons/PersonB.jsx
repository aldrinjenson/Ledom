import React, { Component } from "react";
import Navbar from "../Navbar";
import DisplayMessage from "../DisplayMessage";
import WriteMessage from "../WriteMessage";
import uuid from 'uuid/v1'

export class PersonB extends Component {


  state = {
    messages: [
      
    ]
  };


    // const {messageB, setMessageB} = useContext(BContext)
  addMsg = (msg) =>{
    const {messages} = this.state
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
                { messages.map(message => <DisplayMessage key={message.id} message={message}/>) }
            </div>
            <WriteMessage addMsg={this.addMsg}/>
        </div>
    </div>
    );
  }
}

export default PersonB;
