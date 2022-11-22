import React,{useState} from 'react'


const UseState = () => {
    const [name] = useState("Skillhub");
  return (
    <div>
      <center>
        <h1>{name}</h1>
      </center>
    </div>
  )
}

export default UseState
