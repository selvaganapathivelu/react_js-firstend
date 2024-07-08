// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import DressProduct from '../components/DressProduct';

// function DressPage() {
//   const [dresses, setDresses] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Make an HTTP GET request to your backend API for dresses
//     axios.get('http://localhost:3005/api/dresses')
//       .then((response) => {
//         // Update the state with the data received from the backend
//         setDresses(response.data);
//         setLoading(false); // Set loading to false when data is fetched
//       })
//       .catch((error) => {
//         console.error('Error fetching dresses:', error);
//         setLoading(false); // Set loading to false on error
//       });
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>; // Display a loading indicator while data is being fetched
//   }

//   return (
//     <div className="dress-page">
//       <h2>Dresses</h2>
//       <div className="dress-list">
//         {dresses.map((dress) => (
//           <DressProduct key={dress.id} product={dress} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default DressPage;













// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function DressPage({ addToCart }) {
//   const [dresses, setDresses] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     axios
//       .get('http://localhost:3005/api/dresses')
//       .then((response) => {
//         setDresses(response.data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error('Error fetching dresses:', error);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h2>Dresses</h2>
//       <ul>
//         {dresses.map((dress) => (
//           <li key={dress.id}>
//             <h3>{dress.name}</h3>
//             <p>ID: {dress.id}</p>
//             <p>Brand: {dress.brand}</p>
//             <p>Price: ${dress.price}</p>
//             <p>Description: {dress.description}</p>
//             <button onClick={() => addToCart(dress)}>Add to Cart</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default DressPage;











import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./ele.css"
import NavBar from "../components/Navbar"
function DressPage({ addToCart }) {
  const [dresses, setDresses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('http://localhost:3005/api/dresses')
      .then((response) => {
        setDresses(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching dresses:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  // return (
  //   <div>
  //     <h2>Dresses</h2>
  //     <ul>
  //       {dresses.map((dress) => (
  //         <li key={dress.id}>
  //           <h3>{dress.name}</h3>
  //           <p>ID: {dress.id}</p>
  //           <p>Brand: {dress.brand}</p>
  //           <p>Price: ${dress.price}</p>
  //           <p>Description: {dress.description}</p>
  //           <button onClick={() => addToCart(dress)}>Add to Cart</button>
  //         </li>
  //       ))}
  //     </ul>
  //   </div>
  // );



  return (
    <div className='grid4'>
      <NavBar/>
      <div className='grid11'>

      </div>
   
      <div className=''> 
      <ul className='grid'>
        {dresses.map((mobile) => (
          <div className='grid2'>

            <img src={mobile.brand}  className='grid3' />
            <div className='grid9'>
           <h1 className='grid5'>
           {mobile.name}
           </h1>
           <h4 className='grid6'>{mobile.description}</h4>
           <div className='dj'>
                  <ul className='grid7'>
                    <li className='del'><del>${mobile.price}</del></li>
                    <li className='del'>(50% off)      </li>
                    <li className='del'>${mobile.officePrice}</li>
                  </ul>
                
                </div>
          
            <button  className='grid8' onClick={() => addToCart(mobile)}>Add to Cart</button>
          </div>
          </div>
        ))}
      </ul>
      </div>
    </div>
  );
}

export default DressPage;
