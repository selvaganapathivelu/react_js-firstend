
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js';
import "./cart.css"
function Cart({ cartItems, removeFromCart, updateQuantity, clearCart }) {
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const total = cartItems.reduce((total, item) => total + item.officePrice * item.quantity, 0);
    setTotalAmount(total);
  }, [cartItems]);

  const stripePromise = loadStripe('pk_test_51NvyAoKMhslVWfSdMNLjX7DurQ5OgeobMg3mEEDOaQsFvpTRh8yecb3VTRcTplBfCMJTsCCyxfQyVrlztoWGPHCd00f3jFaYdd'); // Replace with your actual Stripe publishable key

  const handleCheckout = async () => {
    try {
      const stripe = await stripePromise;

      const requestData = {
        cartItems: cartItems,
      };

      const response = await axios.post('http://localhost:3001/', requestData);

      const session = response.data;

      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (result.error) {
        console.error(result.error.message);
      }
    } catch (error) {
      console.error('Error during checkout:', error);
    }
  };

  const handleSaveToMongoDB = async () => {
    try {
      const cartData = cartItems.map((item) => ({
        id: item.id,
        name: item.name,
        description: item.description,
        quantity: item.quantity,
        price: item.officePrice,

      }));


      const response = await axios.post('http://localhost:3005/api/cart/save', { cartData });


      console.log('Cart items inserted into MongoDB:', response.data);
    } catch (error) {
      console.error('Error inserting cart items into MongoDB:', error);
    }
  };

  return (
    <div>
      <h1 className='cart2'>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} >
              <div className='cart1'>


                <img src={item.brand} className="cart3" alt={item.name} />



                <div className="cart6">
                  <h3 className='cart4'>{item.name}</h3>
                  <h1 className='cart5'>
                    {item.description}
                  </h1>
                  <div >  <span className='cart7'>Price: $   {item.officePrice * item.quantity}</span>  <span className='cart8'>

                  </span>
                  </div>

                  <div className='cart10'>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className='cart11'>+</button>
                    <span className='cart12'>Quantity: {item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className='cart13'>- </button>
                    {/* <button onClick={() => removeFromCart(item.id)}>Remove from Cart</button> */}

                  </div>
                  {/* <button onClick={clearCart} className='cart15'>Clear Cart</button> */}

                  <div className='cart18'>
                  <span className='cart16'> Total Price: ${totalAmount}</span>
                  <button className='cart17' onClick={() => {
            handleSaveToMongoDB();
            handleCheckout();
          }}>Checkout</button>

                  </div>


                </div>
              </div>
            </div>
          ))}
         

        

        </div>
      )}
    </div>
  );
}

export default Cart;
