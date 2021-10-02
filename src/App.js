import React from 'react';

import { Counter } from './features/counter/Counter';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';


import SideNavBar from './Components/SideNavBarComponent/SideNavBar';
import AllProducts from './Components/ProductsComponent/AllProducts';
import Cart from './Components/CartComponent/CartContainer/Cart';

function App() {
  return (
    <div>
      <BrowserRouter>
        <SideNavBar />
        <Route path="/" exact component={AllProducts} />

        <Route path="/cart" exact component={Cart} />

      </BrowserRouter>

    </div>
  );
}

export default App;
