// import React, { useState } from 'react';
// import { Elements } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';
// import CheckoutForm from './pay';
// import Navbar from './navbar';

// const stripePromise = loadStripe('pk_test_51NvyAoKMhslVWfSdMNLjX7DurQ5OgeobMg3mEEDOaQsFvpTRh8yecb3VTRcTplBfCMJTsCCyxfQyVrlztoWGPHCd00f3jFaYdd'); // Replace with your actual Stripe public key

// function App1() {
  








//   return (
//     <div className="App">
//       <Navbar/>
//       <h1>Stripe Payment App</h1>
//       <Elements stripe={stripePromise}>
//         <CheckoutForm   />
//       </Elements>
      
//     </div>
//   );
// }

// export default App1;





// src/App.js
// import React from 'react';
// import { Elements } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';
// import CheckoutForm from './pay';

// const stripePromise = loadStripe('pk_test_51NvyAoKMhslVWfSdMNLjX7DurQ5OgeobMg3mEEDOaQsFvpTRh8yecb3VTRcTplBfCMJTsCCyxfQyVrlztoWGPHCd00f3jFaYdd'); // Replace with your actual Stripe public key

// function App({totalamount}) {
//   return (
//     <div className="App">
//       <h1>Stripe Payment App</h1>
//       <Elements stripe={stripePromise}>
//         <CheckoutForm totalamount={totalamount}/>
//       </Elements>
//     </div>
//   );
// }

// export default App;



import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './pay'; // Assuming your component is named CheckoutForm

// Replace 'your_stripe_public_key' with your actual Stripe public key
const stripePromise = loadStripe('pk_test_51NvyAoKMhslVWfSdMNLjX7DurQ5OgeobMg3mEEDOaQsFvpTRh8yecb3VTRcTplBfCMJTsCCyxfQyVrlztoWGPHCd00f3jFaYdd');

function App({ totalamount }) {
  return (
    <div className="App">
      <h1>Stripe Payment App</h1>
      <Elements stripe={stripePromise}>
        <CheckoutForm totalamount={totalamount} />
      </Elements>
    </div>
  );
}

export default App;
