import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate,useParams } from 'react-router-dom'
import { useEffect } from 'react'
const UpdateUser = () => {
    let [values,setvalues]=useState({username:"",email:""})
    let navigate=useNavigate();
    let change=(e)=>{
        setvalues({...values,[e.target.name]:[e.target.value]})
    }
    
   let {id}=useParams();
   useEffect(()=>{
     axios.get("http://localhost:4040/users/"+id).then(res=>setvalues(res.data))
     .catch((err) => console.error('Error fetching user data:', err));
   },[id])
   function update(){
    axios.put("http://localhost:4040/users/"+id,values).then(()=>{
        return(  navigate("/"))})
        .catch((err) => console.error('Error fetching user data:', err));

      
        

    }
   
  return (
    <div>
      <h1>ADD NEW USER</h1>
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
      <button onClick={update} >UpdateUser</button>
    </div>
  )
}

export default UpdateUser
