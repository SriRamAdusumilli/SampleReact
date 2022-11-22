import React from 'react'


const Greet= props => {
    const {name,heroname} = props
    return(
    <div>
    <h1>Heelo {name} a.k.a {heroname}</h1>
    
    </div>)
}
//this.props.name
export default  Greet;