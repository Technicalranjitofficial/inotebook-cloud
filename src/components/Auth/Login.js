import React, { useState,useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";
import Loader from '../Loader';
import Message2 from '../Message2';



const Login = (props) => {
    const [flag,setFlag]= useState(true);

    const[message2,setmessage2]=useState(null);
   
    const host = "https://inotebakend.herokuapp.com";
    const history = useNavigate();

    const [crediential, setCrediential] = useState({ email: "", password: "" });
    const messageDis=(message)=>{
        setmessage2(message);
        setTimeout(() => {
            setmessage2(null);
        }, 1500);
    }

    const handleOnSubmit = async (e) => {
        setFlag(false);
        e.preventDefault();
        const response = await fetch(`${host}/api/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },

            body: JSON.stringify({ email: crediential.email, password: crediential.password })
        });

        const json = await response.json();
        console.log(json);
        setFlag(true);

        // console.log({sucess:json.sucess});
        if (json.sucess) {
            localStorage.setItem('token', json.AUthToken);
            history("/note");
            //   redirect(json.AUthToken);
        } else {
            messageDis(json.error);
         
        }

    }

    const onchange = (e) => {
        setCrediential({ ...crediential, [e.target.name]: e.target.value });
    }

    return (
        <>

            <div className='container d-block margin-b'>
                <section className="container">
                    <div className="container-fluid h-custom">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-md-9 col-lg-6 col-xl-5">
                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                                    className="img-fluid" alt="Sample image" />
                            </div>
                            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                                <form onSubmit={handleOnSubmit} name="clearform">

                                    <div className="divider d-flex align-items-center my-4">
                                        <p className="text-center fw-bold mx-3 mb-0">Login</p>
                                    </div>


                                    <div className="form-outline mb-4">
                                        <input type="email" id="email" name="email" value={crediential.email} onChange={onchange} className="form-control form-control-lg"
                                            placeholder="Enter a valid email address" />
                                        <label className="form-label" htmlFor="email">Email address</label>
                                    </div>


                                    <div className="form-outline mb-3">
                                        <input type="password" id="password" name='password' value={crediential.password} onChange={onchange} className="form-control form-control-lg"
                                            placeholder="Enter password" />
                                        <label className="form-label" htmlFor="password">Password</label>
                                    </div>

                                    <div className="d-flex justify-content-between align-items-center">


                                        {/* <a href="/recover" className="text-body">Forgot password?</a> */}
                                     
                                            <Message2 message2={message2}/>
                                            
                                        
                                    </div>

                                    <div className="text-center text-lg-start mt-4 pt-2">

                                        {flag?<button type="submit" disabled={crediential.email<5 || crediential.password <5} className="btn btn-primary btn-lg"
                                            style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}>Login</button>:<Loader Loader={Loader}/> }
                                        <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <Link to="/signup"
                                            className="link-danger">Register</Link></p>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                    {/* footer */}

                </section>
            </div>




        </>
    )
}

export default Login
