// import "./navbar.css"

// import React from 'react';
// import { Link } from 'react-router-dom';

// function Navbar() {
//   return (
//     <nav className="">
//       <div className="">
//         <Link to="/">My Shop</Link>
//       </div>
//       <ul className="navbar1"> 
//       <li className="">
//         selva
//         </li>
//         <li className="">
//           <Link to="/">Mobile</Link>
//         </li>
//         <li className="">
//           <Link to="/tv">TV</Link>
//         </li>
//         <li className="">
//           <Link to="/dress">Dress</Link>
//         </li>
//         <li className="">
//           <Link to="/cart">Cart</Link>
//         </li>
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;










import React from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css";
import logo from "../assets/logo.jpg"
//import { isAuthenticated } from "../services/Auth";
import { isAuthenticated } from "../services/Auth";
export default function Navbar(props) {
  return <>
    <div className='navbar4'>
    
      <ul className="navbar1">
        <li className="">
          <b className='kill'>
            Ballerina
          </b>
        </li>
      {isAuthenticated() ? <li className="navbar2">
          <Link to="/mobile" className='navbar3'><b>Mobile</b></Link>
        </li>:null }
        {isAuthenticated()? <li className="">         <Link to="/tv"  className='navbar3'><b>TV</b></Link>
        </li> :null}
        {isAuthenticated() ? <li className="">
          <Link to="/dress"  className='navbar3'><b>Electrical</b></Link>
        </li> :null}
      
        {isAuthenticated()?<li><a className="li1"  onClick={props.logoutUser} style={{cursor:"pointer"}} ><b>Logout</b></a></li>:null}
        {!isAuthenticated()?<li className="nav-item"><Link className="li1" to="/4"><b>Register</b></Link></li>:null}
        {!isAuthenticated()?<li><Link className="li1" to="/login" ><b>Login</b></Link></li>:null}
       {isAuthenticated()  ?<li className="">
          <Link to="/cart"  className='navbar3'><b>Cart</b></Link>
        </li> :null}
      </ul>
    </div>


  </>
}