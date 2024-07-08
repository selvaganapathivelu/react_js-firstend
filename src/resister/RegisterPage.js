import { useState } from 'react'
import { RegisterApi } from '../services/Api';
import { isAuthenticated } from '../services/Auth';
import { storeUserData } from '../services/Storage';
import './RegisterPage.css'
import { Link, Navigate } from 'react-router-dom';
// import NavBar from '../components1/NavBar';
import ima1 from "../assets/cart.png"

export default function RegisterPage() {
    const initialStateErrors = {
        email: { required: false },
        password: { required: false },
        name: { required: false },
        custom_error: null
    };
    const [errors, setErrors] = useState(initialStateErrors);

    const [loading, setLoading] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        let errors = initialStateErrors;
        let hasError = false;
        if (inputs.name == "") {
            errors.name.required = true;
            hasError = true;
        }
        if (inputs.email == "") {
            errors.email.required = true;
            hasError = true;
        }
        if (inputs.password == "") {
            errors.password.required = true;
            hasError = true;
        }

        if (!hasError) {
            setLoading(true)
            //sending register api request
            RegisterApi(inputs).then((response) => {
                storeUserData(response.data.idToken);
            }).catch((err) => {
                if (err.response.data.error.message == "EMAIL_EXISTS") {
                    setErrors({ ...errors, custom_error: "Already this email has been registered!" })
                } else if (String(err.response.data.error.message).includes('WEAK_PASSWORD')) {
                    setErrors({ ...errors, custom_error: "Password should be at least 8 characters!" })
                }

            }).finally(() => {
                setLoading(false)
                console.log("ii")
            })
        }
        console.log(initialStateErrors, errors);
        setErrors(errors);
    }

    const [inputs, setInputs] = useState({
        email: "",
        password: "",
        name: ""
    })

    const handleInput = (event) => {
        setInputs({ ...inputs, [event.target.name]: event.target.value })
    }

    if (isAuthenticated()) {

        return <Navigate to="/mobile" />
    }

    return (






        <div className="now1">
            <div className='raju'></div>
            {/* <img src={ima1} className='image1'/> */}
            <form onSubmit={handleSubmit} className="register-form" action="" >
                <h2 className="resister">Register Now</h2>
                <div className="mani">
                    {/* <label htmlFor="exampleInputEmail1" className="text-uppercase">Name</label> */}

                    <input type="text" className="mani1" onChange={handleInput} name="name" id="" placeholder='Username' />
                    {errors.name.required ?
                        (<span className="text-danger" >
                            Name is required.
                        </span>) : null
                    }
                </div>
                <div className="mani">
                    {/* <label htmlFor="exampleInputEmail1" className="text-uppercase">Email</label> */}

                    <input type="text" className="mani1" onChange={handleInput} name="email" id="" placeholder='Email' />
                    {errors.email.required ?
                        (<span className="text-danger" >
                            Email is required.
                        </span>) : null
                    }
                </div>
                <div className="mani">
                    {/* <label htmlFor="exampleInputPassword1" className="text-uppercase">Password</label> */}
                    <input className="mani1" type="password" onChange={handleInput} name="password" id="" placeholder='Password' />
                    {errors.password.required ?
                        (<span className="text-danger" >
                            Password is required.
                        </span>) : null
                    }
                </div>
                <div className="mani4">

                    <span className="text-danger" >
                        {errors.custom_error ?
                            (<p>{errors.custom_error}</p>)
                            : null
                        }
                    </span>




                    <div className="mani5">
                        {/* {loading ? (<div className="mani6 " role="status">
                            <span className="sr-only">Loading...</span>
                        </div>) : null
                        } */}
                        <div className='mani123'>
                           {loading?(<div className="mani16 " role="status">
                                <span className="sr-only">Loading...</span>
                            </div>):null}
                        </div>



                        <input type="submit" className="filina  " disabled={loading} value="Register" />
                    </div>
                </div>

                <div className="mani8">
                    Already have account ? Please <Link to="/login">Login</Link>
                </div>


            </form>


        </div>







    )
}