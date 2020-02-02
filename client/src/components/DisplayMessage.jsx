import React,{useContext} from 'react'
import PersonC from './persons/PersonC';
import { MessageContext } from '../contexts/MessageContexts';
import uuid from 'uuid/v1'

const DisplayMessage = ({message}) => {

    const {messages,setMessages} = useContext(MessageContext)
    const handleClickC = () =>{
        console.log('Forwarded Message to C',message.msg);
        setMessages([...messages,{title:message.msg,id:uuid()}])
    }
    return (
        <div className="card-panel right-align">
            <div className='green-text lighten-2'>{message.msg} 
                <div className="card-action">
                    <button onClick={handleClickC} className="btn-floating small">To C</button>
                </div>
            </div>
        </div>
    )
}

export default DisplayMessage;
