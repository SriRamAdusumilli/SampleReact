import React, { Component } from 'react'

export default class Display extends Component {
  render() {
    return (
      <div>
        <h2> I am {this.props.name}</h2>
      </div>
    )
  }
}
