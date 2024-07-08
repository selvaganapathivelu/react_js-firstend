















import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import "./pay.css"

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setLoading(true);

    try {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: elements.getElement(CardElement),
      });

      if (error) {
        throw error;
      }

      const response = await axios.post('http://localhost:3006', {
        amount: 1000000,
        currency: 'usd',
        description: 'Test Payment',
      });

      if (response.status === 200) {
        alert('Payment successful');
        navigate('/ganu');
      } else {
        throw new Error('Payment processing failed.');
      }
    } catch (error) {
      console.error('Payment error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='dolling1'>
      <label>
        Card Details
        <CardElement />
      </label>
      <button type="submit" disabled={loading}>
        {loading ? 'Processing...' : 'Pay Now'}
      </button>
      
    </form>
  );
};

export default CheckoutForm;





