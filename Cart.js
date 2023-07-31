// src/components/Cart.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Cart = () => {
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    // Fetch cart products from the backend API
    // (You need to implement this endpoint on the backend side)
    axios.get('http://localhost:5000/cart')
      .then(response => {
        setCartProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching cart products:', error);
      });
  }, []);

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cartProducts.map(product => (
          <li key={product._id}>
            {product.name} - ${product.price}
            <button>Remove from Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
