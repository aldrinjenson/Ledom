import React, { Component } from 'react'

export class WriteMessage extends Component {

    state = {
        msg:''
    }


    handleSubmit = (e) =>{
        e.preventDefault()
        this.props.addMsg(this.state.msg)
        this.setState({
            msg:''
        })
    }

    render() {
        const {msg} = this.state
        return (
            <form onSubmit={this.handleSubmit} className='input-field'>
                <input required onChange={e=>this.setState({msg:e.target.value})} type="text"/>
                <button value={msg}  placeholder='Enter message' className='btn' type="submit">Send</button>
            </form>
        )
    }
}

export default WriteMessage
