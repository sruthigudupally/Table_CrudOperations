import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const AddUser = () => {
    let [values,setvalues]=useState({username:"",email:""})
    let navigate=useNavigate();
    let change=(e)=>{
        setvalues({...values,[e.target.name]:[e.target.value]})
    }
    function adduser(e){
        e.preventDefault();
        axios.post("http://localhost:4040/users",values).then((x)=>navigate("/"))
    }

  return (
    <div>
      <fieldset id='field'>
      <legend>ADD NEW USER</legend>
      <input type="text" placeholder='enter username'
      name="username"
      value={values.username}
      onChange={change}
      />
      <br />
      <input type="text" placeholder='enter email address'
      name="email"
      value={values.email}
      onChange={change}
      />
      <br />
      
      <button onClick={adduser} id="adduser">AddUser</button>
      </fieldset>
    </div>
  )
}

export default AddUser
