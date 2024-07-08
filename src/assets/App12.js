// import RegisterPage from "./pages/RegisterPage";
// import LoginPage from "./pages/LoginPage";
// import DashboardPage from "./pages/Dashboard";
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Mobiles from "./components/Mobiles"
// import  mobileData  from "./data/mobileData"
// import Cart  from "./components/Cart"
// import React, { useState } from "react";


// function App() {



//   const [cart, setCart] = useState([]);

//   const addToCart = (productId) => {
//     const product = getProductById(productId);

//     if (product) {
//       const existingItem = cart.find((item) => item.id === product.id);

//       if (existingItem) {
//         const updatedCart = cart.map((item) =>
//           item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
//         );
//         setCart(updatedCart);
//       } else {
//         setCart([...cart, { ...product, quantity: 1 }]);
//       }
//     }
//   };

//   const updateQuantity = (productId, newQuantity) => {
//     const updatedCart = cart.map((item) =>
//       item.id === productId ? { ...item, quantity: newQuantity } : item
//     );
//     setCart(updatedCart);
//   };

//   const getProductById = (productId) => {
//     const allProducts = [...mobileData];
//     return allProducts.find((product) => product.id === productId);
//   };


//   return (
//     <div className="App">

//         <BrowserRouter>
//             <Routes>
//                 <Route path="/" element={<RegisterPage/>} />
//                 <Route path="/login" element={<LoginPage/>} />
//                 <Route path="/dashboard" element={<DashboardPage/>} />
//                 <Route path="/hello" element={<h1>Home</h1>} />
//                 <Route   path="/mo"  element={<Mobiles mobileProducts={mobileData} addToCart={addToCart} />} />

// <Route
//             path="/cart"
//             element={<Cart cartItems={cart} updateQuantity={updateQuantity} />}
//           />


//             </Routes>


//         </BrowserRouter>


//     </div>
//   );
// }

// export default App;




// src/components/App.js




// import RegisterPage from "./pages/RegisterPage";
// import LoginPage from "./pages/LoginPage";
// import DashboardPage from "./pages/Dashboard";
// // import { BrowserRouter, Route, Routes } from 'react-router-dom';





// import React, { useState } from "react";
// import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";
// // import Navbar from "./Navbar";
// import Mobiles from "./components/Mobiles";
// // import TVs from "./TVs";
// // import Electrical from "./Electrical";
// import Cart from "./components/Cart";
// import mobileData from  "./data/mobileData";
// // import tvData from "../data/tvData";
// // import electricalData from "../data/electricalData";

// function App() {
//   const [cart, setCart] = useState([]);

//   const addToCart = (productId) => {
//     const product = getProductById(productId);

//     if (product) {
//       const existingItem = cart.find((item) => item.id === product.id);

//       if (existingItem) {
//         const updatedCart = cart.map((item) =>
//           item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
//         );
//         setCart(updatedCart);
//       } else {
//         setCart([...cart, { ...product, quantity: 1 }]);
//       }
//     }
//   };

//   const updateQuantity = (productId, newQuantity) => {
//     const updatedCart = cart.map((item) =>
//       item.id === productId ? { ...item, quantity: newQuantity } : item
//     );
//     setCart(updatedCart);
//   };

//   const getProductById = (productId) => {
//     const allProducts = [...mobileData];
//     return allProducts.find((product) => product.id === productId);
//   };

//   return (
//     <BrowserRoute >
//       <div className="App">
//         {/* <Navbar cartCount={cart.length} /> */}
//         <Route path="/" element={<RegisterPage />} />
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/dashboard" element={<DashboardPage />} />
//         <Route path="/hello" element={<h1>Home</h1>} />  <Routes>
//           <Route
//             path="/mobiles"
//             element={<Mobiles mobileProducts={mobileData} addToCart={addToCart} />}
//           />
//           <Route
//             path="/cart"
//             element={<Cart cartItems={cart} updateQuantity={updateQuantity} />}
//           />
//           {/* <Route
//             path="/tv"
//             element={<TVs tvProducts={tvData} addToCart={addToCart} />}
//           /> */}
//           {/* <Route
//             path="/electrical"
//             element={<Electrical electricalProducts={electricalData} addToCart={addToCart} />}
//           /> */}
//         </Routes>
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;





// // src/components/App.js
// import React, { useState } from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import NavBar from "./components1/NavBar";

// import Mobiles from "./components/Mobiles";
// import TVs from "./components/TVs";
// import Electrical from "./components/Electrical";
// import Cart from "./components/Cart";
// import mobileData from "./data/mobileData";
// import tvData from "./data/tvData";
// import electricalData from "./components/Electrical";

// function App() {
//   const [cart, setCart] = useState([]);

//   const addToCart = (productId) => {
//     const product = getProductById(productId);

//     if (product) {
//       const existingItem = cart.find((item) => item.id === product.id);

//       if (existingItem) {
//         const updatedCart = cart.map((item) =>
//           item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
//         );
//         setCart(updatedCart);
//       } else {
//         setCart([...cart, { ...product, quantity: 1 }]);
//       }
//     }
//   };

//   const updateQuantity = (productId, newQuantity) => {
//     const updatedCart = cart.map((item) =>
//       item.id === productId ? { ...item, quantity: newQuantity } : item
//     );
//     setCart(updatedCart);
//   };

//   const getProductById = (productId) => {
//     const allProducts = [...mobileData, ...tvData, ...electricalData];
//     return allProducts.find((product) => product.id === productId);
//   };

//   return ( <>
//     <NavBar/>
//     <Router>
//       <div className="App">
//         {/* <Navbar cartCount={cart.length} /> */}
//         <Routes>
//           <Route
//             path=""
//             element={<Mobiles mobileProducts={mobileData} addToCart={addToCart} />}
//           />
//           <Route
//             path="/cart"
//             element={<Cart cartItems={cart} updateQuantity={updateQuantity} />}
//           />
//           <Route
//             path="/tv"
//             element={<TVs tvProducts={tvData} addToCart={addToCart} />}
//           />
//           <Route
//             path="/"
//             element={<Electrical electricalProducts={electricalData} addToCart={addToCart} />}
//           />
//         </Routes>
//       </div>
//     </Router>
//     </>
//   );

// }

// export default App;








































import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RegisterPage from "./resister/RegisterPage";
import LoginPage from "./resister/LoginPage";
import DashboardPage from "./resister/Dashboard";
import Mobiles from "./components/Mobiles";
import mobileData from "./data/mobileData";
import Cart from "./components/Cart";
import TVs from "./components/TVs"
import  tvData  from "./data/tvData";
import  Electrical from "./components/Electrical";
import electricalData from "./data/electricalData";
import Hello from "./payment.js/hello"
// import Pay from "./payment/pay";
 import Sucess  from "./payment.js/sucess";
// import  Hello from "./payment/hello";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (productId) => {
    const product = getProductById(productId);

    if (product) {
      const existingItem = cart.find((item) => item.id === product.id);

      if (existingItem) {
        const updatedCart = cart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
        setCart(updatedCart);
      } else {
        setCart([...cart, { ...product, quantity: 1 }]);
      }
    }
  };

  const updateQuantity = (productId, newQuantity) => {
    const updatedCart = cart.map((item) =>
      item.id === productId ? { ...item, quantity: newQuantity } : item
    );
    setCart(updatedCart);
  };

  const getProductById = (productId) => {
    const allProducts = [...mobileData,...tvData, ...electricalData];
    return allProducts.find((product) => product.id === productId);
  };
 
  return (
    <div className="App">
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          {/* <Route path="/hello" element={<h1>Home</h1>} /> */}
          <Route
            path="/tv"
            element={<TVs tvProducts={tvData} addToCart={addToCart} />}
          />
           <Route
            path="/elecrical"
            element={<Electrical electricalProducts={electricalData} addToCart={addToCart} />}
          />
          <Route path="/mo" element={<Mobiles mobileProducts={mobileData} addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cartItems={cart} updateQuantity={updateQuantity} />} />
          {/* <Route  path="/pay"  element={<Pay/>}/>
          <Route  path="/sucess" element={<Sucess/>}/> */}
          {/* <Roupay" element={<Hello/>}/>
          <Route path="/pay1" element={<Sucess/>}/>
te path="/ */}


<Route path="/pay"   element={<Hello/>}/>
<Route path="/manifinina"  element={<Sucess/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
