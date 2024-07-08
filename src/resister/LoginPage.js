import './LoginPage.css';

import { useState } from 'react';
import { LoginApi } from '../services/Api';
import {storeUserData } from '../services/Storage'
import { isAuthenticated } from '../services/Auth';
import { Link, Navigate } from 'react-router-dom';
import NavBar from '../components1/NavBar';

export default function LoginPage (){

    const initialStateErrors = {
        email:{required:false},
        password:{required:false},
        custom_error:null
    };
    const [errors,setErrors] = useState(initialStateErrors);
    
    const [loading,setLoading]  =  useState(false);

    const [inputs,setInputs] = useState({
        email:"",
        password:"",
    })
    const handleInput = (event)=>{
        setInputs({...inputs,[event.target.name]:event.target.value})
    }

    const handleSubmit = (event)=>{
        console.log(inputs);
        event.preventDefault();
        let errors =initialStateErrors; 
        let hasError = false; 
        
        if (inputs.email == "") {
            errors.email.required =true;
            hasError=true;
        }
        if (inputs.password == "") {
            errors.password.required =true;
            hasError=true;
        }
       
        if (!hasError) {
            setLoading(true)
            //sending login api request
            LoginApi(inputs).then((response)=>{
               storeUserData(response.data.idToken);
            }).catch((err)=>{
               if (err.code="ERR_BAD_REQUEST") {
                    setErrors({...errors,custom_error:"Invalid Credentials."})
               }

            }).finally(()=>{
                setLoading(false)
            })
        }
        setErrors({...errors});

    }

  
    if (isAuthenticated()) {
    
        return <Navigate to="/mobile" />
    }

    return (
     
            
    
            
              
                        <div className="now1">
                            <div className='raju'>
                                
                            </div>
                           
                            <form onSubmit={handleSubmit} className="register-form" action="">
                            <h2 className="login1">Login Now</h2>
                            <div className="login2">
                                {/* <label htmlFor="exampleInputEmail1" className="text-uppercase">Email</label> */}
                                <input type="email"  className="login3" onChange={handleInput} name="email"  id="" placeholder="email"  />
                                { errors.email.required?
                                (<span className="text-danger" >
                                    Email is required.
                                </span>):null
                                }
                            </div>
                            <div className="login2">
                                {/* <label htmlFor="exampleInputPassword1" className="text-uppercase">Password</label> */}
                                <input  className="login3" type="password" onChange={handleInput}  name="password" placeholder="password" id="" />
                                { errors.password.required?
                                (<span className="text-danger" >
                                    Password is required.
                                </span>):null
                                }
                            </div>
                            <div className="mani51">




                        
                                {/* <div  className="mani52">
                                    <div className="spinner-border text-primary " role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                </div> */}
                                




                          
                                <div  className="mani52">
                                        {loading ?  ( <div className="spinner-border text-primary " role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>):null}
                                </div>
                                
                                <span className="text-danger ganu1" >
                             
                          
                               <div className='hello1'>
                           { errors.custom_error?
                                (<p>{errors.custom_error}</p>)
                                :null
                                }
                               </div>
                                
                                </span>
                                <input  type="submit" className="filina1" disabled={loading}  value="Login" />
                            </div>
                            <div className="clearfix"></div>
                            <div className="selva121">
                            Create new account ? Please <Link  to="/">Register</Link>
                            </div>
                            </form>
                        </div>
      
               

  
    )
}