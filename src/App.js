import React from 'react';
import { Button } from 'react-bootstrap';
import {  Route,Routes } from 'react-router-dom';
import Navigation from './components/common/Navigation.js';
import Store from './components/Pages/Store.js';
import About from './components/Pages/About.js';
import CartProvider from './store/CartProvide.js';
import Home from './components/Pages/Home.js';
import Contact from './components/Pages/Contact.js';

const App=()=> {
  
 async function sendDataHandler(person){
   const response=await fetch("https://moviereact-2183d-default-rtdb.firebaseio.com/customers.json",{
    method:'POST',
    body:JSON.stringify(person),
    headers:{
      'Content-Type':"application/json"
    }
   });
}

  return (
   <div>
   <CartProvider>
  <Routes>
   <Route path='/store'element={<><Navigation /><Store /></>}></Route>
   <Route path='/about'element={<About />}></Route>
   <Route path='/home'element={<Home />}></Route>
   <Route path='/contact'element={<Contact onAddperson={sendDataHandler} />}></Route>
   <Route path='/' element={<Home />}></Route>
   </Routes>
   </CartProvider>
 </div> 
   )
}

export default App;
