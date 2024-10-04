import React, { useEffect, useState } from 'react'
import axios from 'axios';

import { useNavigate,Link } from 'react-router-dom';
const Get = () => {
  let [state,setState]=useState([]);
  let navigate=useNavigate();
  let [thead,setthead]=useState([]);
  useEffect(()=>{
     axios.get("http://localhost:4040/users").then(res=>{
        setState(res.data);
         
        setthead(Object.keys(res.data[0]).slice(0,4))
        
      }
       
    )
    
     
     
  },[])
  console.log(state);
  
 function delets(id){
    axios.delete("http://localhost:4040/users/"+id).then(()=>{
        navigate("/")
      
    })
 }
  return (
    <>
       
     
      <table border={1}>
      <caption>
        
          <h1>Crud operations</h1>
          <button onClick={()=>navigate('/add')} id="add">Add+</button>

      </caption>
      <thead>
        <tr>
      {thead.map((x,index)=><th key={index}>{x}</th>)}
      <th>operations</th>
      </tr>
      </thead>
      <tbody>
        {state.map(res1=>{
            return(
                <tr key={res1.id}>
                <td>{res1.id}</td>
                <td>{res1.name}</td>
                <td>{res1.username}</td>
                <td>{res1.email}</td>
                <td>
                    <Link to={`/edit/${res1.id}`}>
                    <button className="but1" id="buts">Edit</button>
                    </Link>
                    <button onClick={()=>delets(res1.id)} className="but1" id="butss">Delete</button>
                </td>

            </tr>
            )
     
        })}
      </tbody>
     </table>
     </>
  )
}
export default Get
