
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import RestaurantList from './RestaurantList';
import Menu from './Menu';
import Cart from './Cart';
import './App.css';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (menuItem) => {
    const updatedItems = [...cartItems, menuItem];
    setCartItems(updatedItems);
  };

  const handleUpdateCart = (updatedItems) => {
    setCartItems(updatedItems);
  };

  return (
    <Router>
      <div className="App">
        <h1>Food Ordering App</h1>
        <Routes>
          <Route path="/" element={<RestaurantList />} />
          <Route
            path="/menu/:restaurantId"
            element={<Menu handleAddToCart={handleAddToCart} />}
          />
          <Route
            path="/cart"
            element={<Cart cartItems={cartItems} setCartItems={handleUpdateCart} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
