import React, { Component } from 'react'

export default class Message extends Component {
    constructor()
    {
        super()
        this.state ={
            message:'welcome visitor'
        }
    }
    changeMessage()
    {
this.setState({message:'Thanks for visiting'
    })
}
  render() {
    return (
    <div>
      <h1>{this.state.message}</h1>
    <button  onClick={()=>this.changeMessage()}>Subscribe</button>
    </div>
    )
  }
}