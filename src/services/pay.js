// import React, { useState } from 'react';
// import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

// const CheckoutForm = ({ onPaymentSuccess }) => {
//   const stripe = useStripe();
//   const elements = useElements();
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!stripe || !elements) {

//     }

//     setLoading(true);

//     try {
//       const { error, paymentMethod } = await stripe.createPaymentMethod({
//         type: 'card',
//         card: elements.getElement(CardElement),
//       });

//       if (error) {
//         throw error;
//       }


//       const response = await fetch('http://localhost:3005/', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           amount: 5000, 
//           currency: 'usd', 
//           description: 'salman', 
//         }),
//       });

//       if (response.ok) {

//         onPaymentSuccess(paymentMethod);
//       } else {

//         throw new Error('Payment processing failed.');
//       }
//     } catch (error) {
//       console.error('Payment error:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Card Details
//         <CardElement
//           options={{
//             style: {
//               base: {
//                 fontSize: '16px',
//                 color: '#424770',
//                 '::placeholder': {
//                   color: '#aab7c4',
//                 },
//               },
//               invalid: {
//                 color: '#9e2146',
//               },
//             },
//           }}
//         />
//       </label>
//       <button type="submit" disabled={loading}>
//         {loading ? 'Processing...' : 'Pay Now'}
//       </button>
//     </form>
//   );
// };

// export default CheckoutForm;



// import { useHistory } from 'react-router-dom'; 

// import React, { useState } from 'react';
// import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

// const CheckoutForm = ({ onPaymentSuccess }) => {


//   const history = useHistory();

//   const stripe = useStripe();
//   const elements = useElements();
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!stripe || !elements) {
//       return;
//     }

//     setLoading(true);

//     try {
//       const { error, paymentMethod } = await stripe.createPaymentMethod({
//         type: 'card',
//         card: elements.getElement(CardElement),
//       });

//       if (error) {
//         throw error;
//       }


//       const response = await fetch('http://localhost:3005/', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           amount: 50000, 
//           currency: 'usd', 
//           description: 'salman', 
//         }),
//       });

//       if (response.ok) {

//         alert("yes")
//         return  history.push('/success');


//         onPaymentSuccess(paymentMethod);
//       } else {

//         throw new Error('Payment processing failed.');
//       }
//     } catch (error) {
//       console.error('Payment error:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Card Details
//         <CardElement
//           options={{
//             style: {
//               base: {
//                 fontSize: '16px',
//                 color: '#424770',
//                 '::placeholder': {
//                   color: '#aab7c4',
//                 },
//               },
//               invalid: {
//                 color: '#9e2146',
//               },
//             },
//           }}
//         />
//       </label>
//       <button type="submit" disabled={loading}>
//         {loading ? 'Processing...' : 'Pay Now'}
//       </button>
//     </form>
//   );
// };

// export default CheckoutForm;























// import Sucess from "./sucess";
// import React, { useState } from 'react';
// import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
// import { useNavigate, Navigate } from "react-router-dom"
// const CheckoutForm = ({ onPaymentSuccess }) => {
//   const navigate = useNavigate();
//   const stripe = useStripe();
//   const elements = useElements();
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!stripe || !elements) {
//       return;
//     }

//     setLoading(true);

//     try {
//       const { error, paymentMethod } = await stripe.createPaymentMethod({
//         type: 'card',
//         card: elements.getElement(CardElement),
//       });

//       if (error) {
//         throw error;
//       }

//       const response = await fetch('http://localhost:3005/', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           amount: 50000,
//           currency: 'usd', // Corrected the currency value
//           description: 'salman',
//         }),
//       });

//       if (response.ok) {
//         alert("Payment successful");
//         return   (
//           navigate

//         )
//      // Corrected indentation and added a success message
//         onPaymentSuccess(paymentMethod);
//       } else {
//         throw new Error('Payment processing failed.');
//       }
//     } catch (error) {
//       console.error('Payment error:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Card Details
//         <CardElement
//           options={{
//             style: {
//               base: {
//                 fontSize: '16px',
//                 color: '#424770',
//                 '::placeholder': {
//                   color: '#aab7c4',
//                 },
//               },
//               invalid: {
//                 color: '#9e2146',
//               },
//             },
//           }}
//         />
//       </label>
//       <button type="submit" disabled={loading}>
//         {loading ? 'Processing...' : 'Pay Now'}
//       </button>
//     </form>
//   );
// };

// export default CheckoutForm;





















// import Sucess from "./sucess";
// import React, { useState } from 'react';
// import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
// import { useNavigate } from "react-router-dom"

// const CheckoutForm = ({ onPaymentSuccess }) => {
//   const navigate = useNavigate();
//   const stripe = useStripe();
//   const elements = useElements();
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!stripe || !elements) {
//       return;
//     }

//     setLoading(true);

//     try {
//       const { error, paymentMethod } = await stripe.createPaymentMethod({
//         type: 'card',
//         card: elements.getElement(CardElement),
//       });

//       if (error) {
//         throw error;
//       }

//       const response = await fetch('http://localhost:3005/', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           amount: 50000,
//           currency: 'usd',
//           description: 'salman',
//         }),
//       });

//       if (response.ok) {
//         alert("Payment successful");
//         // Navigate to the 'Sucess' component
//         navigate('/');
//         onPaymentSuccess(paymentMethod);
//       } else {
//         throw new Error('Payment processing failed.');
//       }
//     } catch (error) {
//       console.error('Payment error:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Card Details
//         <CardElement
//           options={{
//             style: {
//               base: {
//                 fontSize: '16px',
//                 color: '#424770',
//                 '::placeholder': {
//                   color: '#aab7c4',
//                 },
//               },
//               invalid: {
//                 color: '#9e2146',
//               },
//             },
//           }}
//         />
//       </label>
//       <button type="submit" disabled={loading}>
//         {loading ? 'Processing...' : 'Pay Now'}
//       </button>
//     </form>
//   );
// };

// export default CheckoutForm;









// import React, { useState } from 'react';
// import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
// import { useNavigate } from 'react-router-dom';

// const CheckoutForm = ({ onPaymentSuccess }) => {
//   const navigate = useNavigate();
//   const stripe = useStripe();
//   const elements = useElements();
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!stripe || !elements) {
//       return;
//     }

//     setLoading(true);

//     try {
//       const { error, paymentMethod } = await stripe.createPaymentMethod({
//         type: 'card',
//         card: elements.getElement(CardElement),
//       });

//       if (error) {
//         throw error;
//       }

//       const response = await fetch('http://localhost:3005/', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           amount: 50000,
//           currency: 'usd',
//           description: 'salman',
//         }),
//       });

//       if (response.ok) {
//         alert('Payment successful');
//         navigate('/ki'); // Navigate to the success page
//         onPaymentSuccess(paymentMethod);
//       } else {
//         throw new Error('Payment processing failed.');
//       }
//     } catch (error) {
//       console.error('Payment error:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Card Details
//         <CardElement
//           options={{
//             style: {
//               base: {
//                 fontSize: '16px',
//                 color: '#424770',
//                 '::placeholder': {
//                   color: '#aab7c4',
//                 },
//               },
//               invalid: {
//                 color: '#9e2146',
//               },
//             },
//           }}
//         />
//       </label>
//       <button type="submit" disabled={loading}>
//         {loading ? 'Processing...' : 'Pay Now'}
//       </button>
//     </form>
//   );
// };

// export default CheckoutForm;

























// import React, { useState } from 'react';
// import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
// import { useNavigate } from 'react-router-dom';
// const CheckoutForm = ({ onPaymentSuccess }) => {
//     const navigate = useNavigate();
//   const stripe = useStripe();
//   const elements = useElements();
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!stripe || !elements) {

//     }

//     setLoading(true);

//     try {
//       const { error, paymentMethod } = await stripe.createPaymentMethod({
//         type: 'card',
//         card: elements.getElement(CardElement),
//       });

//       if (error) {
//         throw error;
//       }


//       const response = await fetch('http://localhost:3005/', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           amount: 5000, 
//           currency: 'usd', 
//           description: 'salman', 
//         }),
//       });

//       if (response.ok) {
//        return( navigate="/sucess")
//         onPaymentSuccess(paymentMethod);
//       } else {

//         throw new Error('Payment processing failed.');
//       }
//     } catch (error) {
//       console.error('Payment error:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Card Details
//         <CardElement
//           options={{
//             style: {
//               base: {
//                 fontSize: '16px',
//                 color: '#424770',
//                 '::placeholder': {
//                   color: '#aab7c4',
//                 },
//               },
//               invalid: {
//                 color: '#9e2146',
//               },
//             },
//           }}
//         />
//       </label>
//       <button type="submit" disabled={loading}>
//         {loading ? 'Processing...' : 'Pay Now'}
//       </button>
//     </form>
//   );
// };

// export default CheckoutForm;







// import React, { useState } from 'react';
// import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
// import { useNavigate } from 'react-router-dom';

// const CheckoutForm = ({ onPaymentSuccess }) => {
//   const navigate = useNavigate();
//   const stripe = useStripe();
//   const elements = useElements();
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!stripe || !elements) {
//       // Handle the case where Stripe or Elements are not available
//       return;
//     }

//     setLoading(true);

//     try {
//       const { error, paymentMethod } = await stripe.createPaymentMethod({
//         type: 'card',
//         card: elements.getElement(CardElement),
//       });

//       if (error) {
//         throw error;
//       }

//       const response = await fetch('http://localhost:3005/', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           amount: 5000, 
//           currency: 'usd', 
//           description: 'salman', 
//         }),
//       });

//       if (response.ok) {
//         // Corrected the navigation call
//         navigate('/ganu');
//         onPaymentSuccess(paymentMethod);
//       } else {
//         throw new Error('Payment processing failed.');
//       }
//     } catch (error) {
//       console.error('Payment error:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Card Details
//         <CardElement
//           options={{
//             style: {
//               base: {
//                 fontSize: '16px',
//                 color: '#424770',
//                 '::placeholder': {
//                   color: '#aab7c4',
//                 },
//               },
//               invalid: {
//                 color: '#9e2146',
//               },
//             },
//           }}
//         />
//       </label>
//       <button type="submit" disabled={loading}>
//         {loading ? 'Processing...' : 'Pay Now'}
//       </button>
//     </form>
//   );
// };

// export default CheckoutForm;




// import React, { useState } from 'react';
// import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
// import { useNavigate } from 'react-router-dom';

// const CheckoutForm = ({ onPaymentSuccess }) => {
//     const navigate = useNavigate();
//     const stripe = useStripe();
//     const elements = useElements();
//     const [loading, setLoading] = useState(false);

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         if (!stripe || !elements) {
//             // Handle the case where Stripe or Elements are not available
//             return;
//         }

//         setLoading(true);

//         try {
//             const { error, paymentMethod } = await stripe.createPaymentMethod({
//                 type: 'card',
//                 card: elements.getElement(CardElement),
//             });

//             if (error) {
//                 throw error;
//             }

//             const response = await fetch('http://localhost:3005/', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({
//                     amount: 5000,
//                     currency: 'usd',
//                     description: 'salman',
//                 }),
//             });

//             if (response.ok) {
//                 // Corrected the navigation call
//                 navigate('/ganu');
//                 onPaymentSuccess(paymentMethod);
//             } else {
//                 throw new Error('Payment processing failed.');
//             }
//         } catch (error) {
//             console.error('Payment error:', error);
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div className="payment5">
//             <form onSubmit={handleSubmit} className="payment1">
//                 <label htmlFor="card-details" className="payment2">
//                     Card Details
//                 </label>
//                 <div id="card-details" className="payment3">
//                     <CardElement
//                         options={{
//                             style: {
//                                 base: {
//                                     fontSize: '16px',
//                                     color: '#424770',
//                                     '::placeholder': {
//                                         color: '#aab7c4',
//                                     },
//                                 },
//                                 invalid: {
//                                     color: '#9e2146',
//                                 },
//                             },
//                         }}
//                     />
//                     <input type="text" placeholder="Card Number" className="payment4" />
//                     <input type="text" placeholder="Expiration Date" className="payment4" />
//                     <input type="text" placeholder="CVC" className="payment4" />
//                 </div>

//                 <button type="submit" className="payment6">
//                     <h1>Payment</h1>
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default CheckoutForm;




















// import React, { useState } from 'react';
// import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
// import { useNavigate } from 'react-router-dom';
// import './pay.css'; // Import your CSS file here

// const CheckoutForm = ({ onPaymentSuccess }) => {
//     let s=100;
//   const navigate = useNavigate();
//   const stripe = useStripe();
//   const elements = useElements();
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!stripe || !elements) {
     
//       return;
//     }

//     setLoading(true);

//     try {
//       const { error, paymentMethod } = await stripe.createPaymentMethod({
//         type: 'card',
//         card: elements.getElement(CardElement),
//       });

//       if (error) {
//         throw error;
//       }

//       const response = await fetch('http://localhost:3005/', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           amount: s,
//           currency: 'usd',
//           description: 'salman',
//         }),
//       });

//       if (response.ok) {
       
//         navigate('/ganu');
//         onPaymentSuccess(paymentMethod);
//       } else {
//         throw new Error('Payment processing failed.');
//       }
//     } catch (error) {
//       console.error('Payment error:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="payment5">
//       <form onSubmit={handleSubmit} className="payment1">
//         <label htmlFor="card-details" className="payment2">
//           Card Details
//         </label>
//         <div id="card-details" className="payment3">
        
//           <CardElement  

//           />
          
//         </div>

//         <button type="submit" className="payment4">
//           <h1>Payment</h1>
//         </button>
//       </form>
//     </div>
//   );
// };

// export default CheckoutForm;





















// import React, { useState } from 'react';
// import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
// import { useNavigate } from 'react-router-dom';


// const CheckoutForm = ({ onPaymentSuccess }) => {
//   const navigate = useNavigate();
//   const stripe = useStripe();
//   const elements = useElements();
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!stripe || !elements) {
//       // Handle the case where Stripe or Elements are not available
//       return;
//     }

//     setLoading(true);

//     try {
//       const { error, paymentMethod } = await stripe.createPaymentMethod({
//         type: 'card',
//         card: elements.getElement(CardElement),
//       });

//       if (error) {
//         throw error;
//       }

//       const response = await fetch('http://localhost:3005/', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           amount: 5000,
//           currency: 'usd',
//           description: 'salman',
//         }),
//       });

//       if (response.ok) {
//         // Corrected the navigation call
//         navigate('/ganu');
//         onPaymentSuccess(paymentMethod);
//       } else {
//         throw new Error('Payment processing failed.');
//       }
//     } catch (error) {
//       console.error('Payment error:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Inline styles for CardElement
//   const cardElementStyles = {
//     base: {
//       fontSize: '16px',
//       color: '#424770',
//       '::placeholder': {
//         color: '#aab7c4',
//       },
//     },
//     invalid: {
//       color: '#9e2146',
//     },
//   };

//   return (
//     <div className="payment5">
//       <form onSubmit={handleSubmit} className="payment1">
//         <label htmlFor="card-details" className="payment2">
//           Card Details
//         </label>
//         <div id="card-details" className="payment3">
//           <CardElement options={{ style: cardElementStyles }} />
//           <input type="text" placeholder="Card Number" className="payment4" />
//           <input type="text" placeholder="Expiration Date" className="payment4" />
//           <input type="text" placeholder="CVC" className="payment4" />
//         </div>

//         <button type="submit" className="payment6">
//           <h1>Payment</h1>
//         </button>
//       </form>
//     </div>
//   );
// };

// export default CheckoutForm;



















import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useNavigate } from 'react-router-dom';
import './pay.css'; // Import your CSS file here

const CheckoutForm = ({ onPaymentSuccess }) => {
    let s=1000;
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);

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

      const response = await fetch('http://localhost:3005/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: s,
          currency: 'usd',
          description: 'salman',
        }),
      });

      if (response.ok) {
       
        navigate('/ganu');
        onPaymentSuccess(paymentMethod);
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
    <div className="payment5">
      <form onSubmit={handleSubmit} className="payment1">
        <label htmlFor="card-details" className="payment2">
          Card Details
        </label>
        <div id="card-details" className="payment3">
        
          <CardElement  

          />
          
        </div>

        <button type="submit" className="payment4">
    
          <h1>Payment</h1>
      
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;


