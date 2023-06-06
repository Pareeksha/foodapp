
import React, { useState } from 'react';
import './cart.css'

const Cart = ({ cartItems, setCartItems }) => {
  
  const [orderStatus, setOrderStatus] = useState('');

  const handleQuantityChange = (itemId, change) => {
  const updatedItems = cartItems.map((item) => {
    if (item.id === itemId) {
      const newQuantity = item.quantity + change;
      return { ...item, quantity: newQuantity > 0 ? newQuantity : 1 };
    }
    return item;
  });
  setCartItems(updatedItems);
};


  const handleRemoveItem = (itemId) => {
    const updatedItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedItems);
  };

  const getTotalAmount = () => {
    let total = 0;
    cartItems.forEach((item) => {
      const itemPrice =item.price;
      const itemQuantity = item.quantity;
        total += itemPrice * itemQuantity;
      
    });
    return total;
  };

  const placeOrder = () => {
    setOrderStatus('Processing');
    setTimeout(() => {
      setOrderStatus('Delivered');
    }, 1800000);
  };

  return (
    <div className='Cart '>
      <h2>Cart:</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <p>{item.name} - ${item.price.toFixed(2)} </p>
            <button className='but' onClick={() => handleQuantityChange(item.id, -1)}>
              -
            </button>
            <p className='quantity'>Quantity: {item.quantity}</p>
            <button className='but' onClick={() => handleQuantityChange(item.id, +1)}>
              +
            </button>
            <button  className='button' onClick={() => handleRemoveItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <h3>Total Order Amount: ${getTotalAmount().toFixed(2)}</h3>
     
          
      <div >
                <h3>Address</h3>
                <input
                  type="text"
                  placeholder="Enter your address"
                />
              </div>
              <div>
                <h3>Payment Information</h3>
                <input
                  type="text"
                  placeholder="Card Number"
                />
                <input
                  type="text"
                  placeholder="Expiry Date"
                />
                <input
                  type="text"
                  placeholder="CVV"
                />
              </div>
              <button onClick={placeOrder}>Place Order</button>

              <div>
                {orderStatus && (
                <div className="order-tracker">
                <h2>Order Tracker</h2>
                <p>Status: {orderStatus}</p>
                <p>Estimated Duration: 30 minutes</p>
                </div>
      )}
              </div>
    </div>
  );
};

export default Cart;
