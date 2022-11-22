import React, { Component } from 'react'

class Eventbind extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       message:'Hello world'
    }
  }
  ClickHandler(){
this.setState({message:'GoodBye'})
  }
    render() {
    return (
      <div>{this.state.message}
        <center>
<br></br>
        <button onClick={this.ClickHandler.bind(this)}>
        Onclick
        </button>
        </center>
      </div>
    )
  }
}

export default Eventbind
