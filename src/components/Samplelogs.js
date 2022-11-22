import React,{useState} from 'react'
function Samplelogs()
{
        const [data,setData]=useState({
            username: '',
            password:'',
        })
        const {username,password} = data;
        const onChange= e => {
            setData({...data,[e.target.name]:[e.target.value]})
        }
        const submitHandler =e => {
            e.preventDefault();
            console.log(data);
        }
return (
    <div>
     <center>
        <form onSubmit={submitHandler}>
        <input type="text" placeholder="Username" value={username}
        onChange={onChange} name="username" /><br/>
        <input type="password" placeholder="Password" value={password}
        onChange={onChange} name="password" /><br />
        <input type="submit" name="Submit"/>
     </form>
     </center>
    </div>
  )
}

export default Samplelogs
