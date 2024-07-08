import { Link } from "react-router-dom"
import { isAuthenticated } from "../services/Auth"
//import "./navbar.css"


export default function NavBar(props){
   

                          
    return (
        
        <div className="re">
        <nav className="  a ">
               <button className="navbar-toggler aa" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                    <ul className="nav1    "  >
                        <li className="li1"><b>
                    con</b></li>
                        {/* {!isAuthenticated()?<li className="nav"><Link className="nav-link" to="">hello</Link></li>:null}   */}
                        {!isAuthenticated()?<li className="nav-item"><Link className="li1" to="/"><b>Register</b></Link></li>:null}
                        {!isAuthenticated()?<li><Link className="li1" to="/login" ><b>Login</b></Link></li>:null}
                        { isAuthenticated()?<li className="navbar3 nav-item"><Link className=" li1" to="/mo"><b>Mobile</b></Link></li>:null}
                        { isAuthenticated()?<li className="navbar3 nav-item"><Link className="li1" to="/tv"><b>Tv</b></Link></li>:null}
                        { isAuthenticated()?<li className="navbar3 nav-item "><Link className="li1" to="/elecrical"><b>Elecrical</b></Link></li>:null}
                        {/* {isAuthenticated()?<li><a className="nav-link"  onClick={props.logoutUser} style={{cursor:"pointer"}} >yes</a></li>:null} */}
                        {isAuthenticated()?<li className="nav-item desh"><Link className="nav-link  " to="/dashboard"  >Dashboard</Link></li>:null}
                        {isAuthenticated()?<li><a className="li1"  onClick={props.logoutUser} style={{cursor:"pointer"}} ><b>Logout</b></a></li>:null}
                        {isAuthenticated()?  <li  className="navbar3" ><Link  className="li1" to="/cart"><b>Cart <span>{}</span></b>  </Link></li>:null}
                      
                    </ul>
                </div>
            </nav>
            </div>)
}






// import React from "react";
// import { Link } from "react-router-dom";
// import "../style/navbar.css"

// function Navbar({ cartCount }) {
//   return (
//     <nav className="navbar1">
//       <ul className="navbar2">
//         <li className="navbar3">
//           <Link className="navbar4" to="/">Mobile</Link>
//         </li>
     
//         <li  className="navbar3">
//           <Link   className="navbar4" to="/tv">TV</Link>
//         </li>
//         <li  className="navbar3">
//           <Link  className="navbar4" to="/electrical">Electrical</Link>
//         </li>
//         <li  className="navbar3" >
//           <Link  className="navbar4" to="/cart">Cart <span>{cartCount}</span> </Link>
//         </li>
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;
