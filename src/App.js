import React from 'react';
import { Button } from 'react-bootstrap';
import {  Route,Routes } from 'react-router-dom';
import Navigation from './components/common/Navigation.js';
import Store from './components/Pages/Store.js';
import About from './components/Pages/About.js';
import CartProvider from './store/CartProvide.js';
import Home from './components/Pages/Home.js';

const App=()=> {
  return (
   <div>
   <CartProvider>
  <Routes>
   <Route path='/store'element={<><Navigation /><Store /></>}></Route>
   <Route path='/about'element={<About />}></Route>
   <Route path='/home'element={<Home />}></Route>
   </Routes>
   </CartProvider>
 </div> 
   )
}

export default App;
