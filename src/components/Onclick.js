import React from 'react'

const Onclick = () => {
  return (
    <div>

        <h2 onClick={()=>console.log("clicked")}>sample </h2>
      <button onClick={()=>console.log("clicked")}>Sample</button>
    </div>
  )
}

export default Onclick