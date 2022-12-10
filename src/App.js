import React from 'react';
import { Button } from 'react-bootstrap';
import {  Route,Routes } from 'react-router-dom';
import Navigation from './components/common/Navigation.js';
import Store from './components/Pages/Store.js';
import About from './components/Pages/About.js';
import CartProvider from './store/CartProvide.js';

const App=()=> {
  return (
   <div>
   <CartProvider><Navigation /></CartProvider>
  <Routes>
   <Route path='/store'element={<Store />}></Route>
   <Route path='/about'element={<About />}></Route>
   </Routes>
 </div> 
   )
}

export default App;
