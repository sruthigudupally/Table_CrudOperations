

// import React from 'react';
// import {BrowserRouter,Routes,Route} from 'react-router-dom';
// import Axiosget from './pages/Axiosget';
// import Add from './pages/add.jsx'
// function App() {
  
//   return (
//     // <Axiosget/>
//     // <Add/>
//     <BrowserRouter>
//     <Routes>
//       <Route path='/' element={<Axiosget/>}></Route>
//       <Route path='/Add' element={<Add/>}></Route>
//     </Routes>
//     </BrowserRouter>

//   );
// }

// export default App;
import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Get from './pages/GetUsers'
import AddUser from './pages/AddUser'
import UpdateUser from './pages/UpdateUser'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Get/>}/>
        
        <Route path="/add" element={<AddUser/>}/>
        <Route path="/edit/:id" element={<UpdateUser/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App






















//rafce -react arrow fucntion 
//rcc
//rfc
//rfce
//rce
//imr
//imrd

