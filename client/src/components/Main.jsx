import React, { Component } from "react";
import DisplayMessage from "./DisplayMessage";
import WriteMessage from './WriteMessage'
import uuid from 'uuid/v1'

export class Main extends Component {
  
  state = {
    messages:[
      {msg:'HEllo',id:1},
      {msg:'Hi',id:2}
    ]
  }

  addMsg = (msg) =>{
    const {messages} = this.state
    this.setState({
      messages:[...messages,{msg,id:uuid()}]
    })
  }

  render() {
    const {messages} = this.state
    return (
      <div className="main container">
        <div className='message-window right'>
          { messages.map(message => <DisplayMessage key={message.id} message={message}/>) }
        </div>
        <WriteMessage addMsg={this.addMsg}/>
      </div>
    )
  }
}

export default Main;
