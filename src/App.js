

// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import MobilePage from './pages/MobilePage';
// import TVPage from './pages/TVPage';
// import DressPage from './pages/DressPage';
// import Cart from './pages/CartPage'; 
// import Resister from "./resister/RegisterPage";
// import Login from "./resister/LoginPage";
// import App1 from "./payment/hello";
// import Scess  from "./payment/sucess";
// // import App from "./payment/App";
// // import Hello from "./payment.js/pay";
// // import Sucess from "./payment.js/sucess"
// function App() {
  



//   const addToCart = (product) => {
    
//     const existingProduct = cart.find((item) => item.id === product.id);

//     if (existingProduct) {

//       const updatedCart = cart.map((item) =>
//         item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
//       );
//       setCart(updatedCart);
//     } else {
      
//       setCart([...cart, { ...product, quantity: 1 }]);
//     }
//   };


//   const removeFromCart = (productId) => {
//     const updatedCart = cart.filter((item) => item.id !== productId);
//     setCart(updatedCart);
//   };


//   const updateQuantity = (productId, newQuantity) => {
//     const updatedCart = cart.map((item) =>
//       item.id === productId ? { ...item, quantity: newQuantity } : item
//     );
//     setCart(updatedCart);
//   };

//   // Function to clear the cart
//   const clearCart = () => {
//     setCart([]);
//   };

//   return (
//     <>
    
//     <Router>
//   {/* <Navbar/> */}
//       <div>

//         <Routes>
          
//         <Route  path="/pay"  element={<App1/>}   />
//         <Route  path="/ganu" element={<Scess/>}/>
//         {/* <Route path="/pay"   element={<Hello/>}/> */}
//         {/* <Route path="/manifinina"  element={<Sucess/>}/> */}
//           <Route path="/mobile" element={<MobilePage addToCart={addToCart} />} />
//           <Route path="/tv" element={<TVPage addToCart={addToCart} />} />
//           <Route path="/dress" element={<DressPage addToCart={addToCart} />} />
//           <Route path='/' element={<Resister/>}/>
//           <Route path='/login'  element={<Login/>}/>
//           <Route path="/cart" element={<Cart cartItems={cart} removeFromCart={removeFromCart} updateQuantity={updateQuantity} clearCart={clearCart} />} />
//         </Routes>
//       </div>
//     </Router>
//     </>
//   );
  
// }

// export default App;





import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import MobilePage from './pages/MobilePage';
import TVPage from './pages/TVPage';
import DressPage from './pages/DressPage';
import Cart from './pages/CartPage'; 
import Resister from "./resister/RegisterPage";
import Login from "./resister/LoginPage";
import App1 from "./payment/hello";
import Scess from "./payment/sucess";

function App() {
  // Initialize the cart state
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      const updatedCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  const updateQuantity = (productId, newQuantity) => {
    const updatedCart = cart.map((item) =>
      item.id === productId ? { ...item, quantity: newQuantity } : item
    );
    setCart(updatedCart);
  };

  // Function to clear the cart
  const clearCart = () => {
    setCart([]);
  };

  return (
    <Router>
      <div>
        <Routes>
          <Route  path='/ganu' element={<Scess  gg={clearCart}/>}/>
          <Route path="/pay" element={<App1 />} />
          {/* <Route path="/ganu" element={<Scess />} /> */}
          <Route path="/mobile" element={<MobilePage addToCart={addToCart}  cartItems={cart} />} />
          <Route path="/tv" element={<TVPage addToCart={addToCart} />} />
          <Route path="/dress" element={<DressPage addToCart={addToCart} />} />
          <Route path='/' element={<Resister />} />
          <Route path='/login' element={<Login />} />
          <Route path="/cart" element={<Cart cartItems={cart} removeFromCart={removeFromCart} updateQuantity={updateQuantity} clearCart={clearCart} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
// import Checkout from './components/Checkout';
// import Cart from './components/Cart';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <header>
//           <h1>Stripe Checkout</h1>
//         </header>
//         <main>
//           <Switch>
//             <Route path="/" exact component={Cart} />
//             <Route path="/checkout" component={Checkout} />
//           </Switch>
//         </main>
//       </div>
//     </Router>
//   );
// }

// export default App;
