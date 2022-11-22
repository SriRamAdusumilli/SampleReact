import React,{useState} from 'react'

const Onchange = () => {
    const [user,setUser]=useState("");
    const handler = e =>{
        setUser(e.target.value)
    }
  return (
    <div>
      <input type="text" placeholder="User Name" value= {user} name="user" onChange={handler}></input>

    </div>
  )
}

export default Onchange
