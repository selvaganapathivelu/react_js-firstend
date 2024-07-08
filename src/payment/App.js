// import React, { useState } from 'react';
// import { Elements } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';
// import CheckoutForm from './pay';

// const stripePromise = loadStripe('pk_test_51NvyAoKMhslVWfSdMNLjX7DurQ5OgeobMg3mEEDOaQsFvpTRh8yecb3VTRcTplBfCMJTsCCyxfQyVrlztoWGPHCd00f3jFaYdd'); // Replace with your actual Stripe public key

// function App() {
//   const [paymentMethod, setPaymentMethod] = useState(null);

//   const handlePaymentSuccess = (method) => {
//     setPaymentMethod(method);
//   };

//   return (
//     <div className="App">
//       <h1>Stripe Payment App</h1>
//       <Elements stripe={stripePromise}>
//         <CheckoutForm onPaymentSuccess={handlePaymentSuccess} />
//       </Elements>
//       {paymentMethod && (
//         <div>
//           <h2>Payment Successful!</h2>
//           <p>Payment Method: {paymentMethod.card.brand}</p>
//           <p>Payment Amount: ${paymentMethod.amount / 100}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;







// import React, { useState } from 'react';
// import { Elements } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';
// import CheckoutForm from './pay';

// const stripePromise = loadStripe('pk_test_51NvyAoKMhslVWfSdMNLjX7DurQ5OgeobMg3mEEDOaQsFvpTRh8yecb3VTRcTplBfCMJTsCCyxfQyVrlztoWGPHCd00f3jFaYdd'); // Replace with your actual Stripe public key

// function App() {
//   const [paymentMethod, setPaymentMethod] = useState(null);

//   const handlePaymentSuccess = (method) => {
//     setPaymentMethod(method);
//   };

//   return (
//     <div className="App">
//       <h1>Stripe Payment App</h1>
//       <Elements stripe={stripePromise}>
//         <CheckoutForm onPaymentSuccess={handlePaymentSuccess} />
//       </Elements>
//       {paymentMethod && (
//         <div>
//           <h2>Payment Successful!</h2>
//           <p>Payment Method: {paymentMethod.card.brand}</p>
//           <p>Payment Amount: ${paymentMethod.amount / 100}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;




import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App1 from "./hello";
import Scess  from "./sucess";
function App() {
  return (
    <Router>
      <Routes>
        <Route  path="/pay"  element={<App1/>}/>
        <Route  path="/ganu" element={<Scess/>}/>
      </Routes>
    </Router>
  );
}

export default App;
