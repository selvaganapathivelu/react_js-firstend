// import React from "react";
// import { useNavigate } from "react-router-dom";
// import "./sucess.css";

// function Ganu({gg}) {
//   const navigate = useNavigate(); // Get the navigate function from react-router-dom

//   const goToMobile = () => {

//     navigate("/mobile");

//      // Use the navigate function to go to the "/mobile" route
//   };


//   return (
//     <>
//       <div className='inner'>
//         <div className="pay1">
//           <div className="outer">
//             <div className="aaa">
//               <div className="aa"></div>
//               <div className="rk"></div>
//               <div className="rkk"></div>
//               <div className="ticket">
//                 <h1 className="awe">Awesome!</h1>
//                 <h1 className="awe">Payment Successful</h1>
//                 <button onClick={goToMobile,gg}>Done</button> {/* Use goToMobile here */}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className='sam'></div>
//     </>
//   );
// }

// export default Ganu;



import React from "react";
import { useNavigate } from "react-router-dom";
 import "./sucess.css";

function Ganu({ gg }) {
  const navigate = useNavigate(); // Get the navigate function from react-router-dom

  const goToMobile = () => {
    navigate("/mobile");
    // You can use the gg parameter here if needed
  };

  return (
    <>
      <div className='inner'>
        <div className="pay1">
          <div className="outer">
            <div className="aaa">
              <div className="aa"></div>
              <div className="rk"></div>
              <div className="rkk"></div>
              <div className="ticket">
                <h1 className="awe">Awesome!</h1>
                <h1 className="awe">Payment Successful</h1>
                <button onClick={() => goToMobile(gg)} className="done">Done</button>
                {/* Use an arrow function to pass the gg parameter */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='sam'></div>
    </>
  );
}

export default Ganu;
