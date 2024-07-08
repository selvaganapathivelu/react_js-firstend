

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./mobile.css";
import Navbar from '../components/Navbar';
import { useNavigate, Navigate } from "react-router-dom";
import { logout, isAuthenticated } from "../services/Auth"
function MobilePage({ addToCart, cartItems }) {
  const [mobiles, setMobiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('http://localhost:3005/api/mobiles')
      .then((response) => {
        setMobiles(response.data);
        setLoading(false);

      })
      .catch((error) => {
        console.error('Error fetching mobiles:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  const { brand } = mobiles;
  const logoutUser = () => {
    logout();
    navigate('/login')
  }


  if (!isAuthenticated()) {

    navigate('/login');
    return null;
  }

  return (
    <div className='grid4'>
      <Navbar logoutUser={logoutUser} />
      <div className='grid1'>

      </div>

      <div className=''>
        <ul className='grid'>
          {mobiles.map((mobile) => (
            <div className='grid2'>

              <img src={mobile.brand} className='grid3' />
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

                <button className='grid8' onClick={() => addToCart(mobile)}>Add to Cart</button>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MobilePage;
