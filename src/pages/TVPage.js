
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./tv.css"
import NavBar from '../components/Navbar';
function TVPage({ addToCart }) {
  const [tvs, setTvs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('http://localhost:3005/api/tvs')
      .then((response) => {
        setTvs(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching TVs:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  // return (
  //   <div>
  //     <h2>TVs</h2>
  //     <ul>
  //       {tvs.map((tv) => (
  //         <li key={tv.id}>
  //           <h3>{tv.name}</h3>
  //           <p>ID: {tv.id}</p>
  //           <p>Brand: {tv.brand}</p>
  //           <p>Price: ${tv.price}</p>
  //           <p>Description: {tv.description}</p>
  //           <button onClick={() => addToCart(tv)}>Add to Cart</button>
  //         </li>
  //       ))}
  //     </ul>
  //   </div>
  // );









  return (
    <div className='grid4'><NavBar/>
      <div className='grid10'>

      </div>
   
      <div className=''> 
      <ul className='grid'>
        {tvs.map((mobile) => (
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

export default TVPage;
