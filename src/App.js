import React from 'react';
import { Button } from 'react-bootstrap';

import Navigation from './components/common/Navigation.js';
import Store from './components/Pages/Store.js';
import CartProvider from './store/CartProvide.js';

const App=()=> {
  return (
    <CartProvider>
   <Navigation />
   <Store />
   </CartProvider>
   )
}

export default App;
