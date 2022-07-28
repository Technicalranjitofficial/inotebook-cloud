import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Loader from '../Loader';
import Message2 from '../Message2';

const Signup = (props) => {
    const host = "https://inotebakend.herokuapp.com";
    const [flag,setFlag]= useState(true);

    const[message2,setmessage2]=useState(null);
    const history = useNavigate();

    const [crediential, setCrediential] = useState({ name: "", email: "", password: "" });

    const onchange = (e) => {
        setCrediential({ ...crediential, [e.target.name]: e.target.value });
    }

    const handleOnSubmit = async (e) => {
        setFlag(false)
        e.preventDefault();

        const response = await fetch(`${host}/api/auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },

            body: JSON.stringify({ name: crediential.name, email: crediential.email, password: crediential.password })
        });

        const json = await response.json();

        if (json.sucess) {
            setFlag(true)
            console.log(json.sucess)
            props.showAlert("Account Created Sucessfully", "success");
            history("/");
        } else {
            setFlag(true);
            props.showAlert(json.err, "info");
            messageDis(json.err);
        }
    }

    const messageDis=(message)=>{
        setmessage2(message);
        setTimeout(() => {
            setmessage2(null);
        }, 1500);
    }
    return (
        // <div className='container col-md-8'>
        //     <form onSubmit={handleOnsubmit}>
        //         <div className="form-group">
        //             <label htmlFor="name">Full Name :</label>
        //             <input type="text" className="form-control" id="name" name='name' value={crediential.name} onChange={onchange} required aria-describedby="emailHelp" placeholder="Enter Your Full name" />
        //         </div>
        //         <div className="form-group">
        //             <label htmlFor="email">Email address</label>
        //             <input type="email" className="form-control" id="email" name='email' value={crediential.email} required onChange={onchange} aria-describedby="emailHelp" placeholder="Enter email" />
        //             <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        //         </div>
        //         <div className="form-group">
        //             <label htmlFor="password">Password</label>
        //             <input type="password" className="form-control" id="password" value={crediential.password} onChange={onchange} required name='password' placeholder="Password" />
        //         </div>

        //         <button type="submit" disabled={crediential.name<5 || crediential.email<5 || crediential.password<5} className="btn btn-primary">Submit</button>
        //     </form>
        // </div>
        <div className='container d-block margin-b'>
            <section className="container">
                <div className="container-fluid h-custom">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-md-9 col-lg-6 col-xl-5">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                                className="img-fluid" alt="Sample image" />
                        </div>
                        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                            <form onSubmit={handleOnSubmit}>

                                <div className="divider d-flex align-items-center my-4">
                                    <p className="text-center fw-bold mx-3 mb-0">SIGNUP</p>
                                </div>
                                <div className="form-outline mb-4">
                                    <input type="text" id="name" name="name" value={crediential.name} onChange={onchange} className="form-control form-control-lg"
                                        placeholder="Enter Your FullName" />
                                    <label className="form-label" htmlFor="name">FullName</label>
                                </div>

                                <div className="form-outline mb-4">
                                    <input type="email" id="email" name="email" value={crediential.email} onChange={onchange} className="form-control form-control-lg"
                                        placeholder="Enter a valid email address" />
                                    <label className="form-label" htmlFor="email">Email address</label>
                                </div>


                                <div className="form-outline mb-3">
                                    <input type="password" id="password" name='password' value={crediential.password} onChange={onchange} className="form-control form-control-lg"
                                        placeholder="Enter password" autoComplete="off" />
                                    <label className="form-label" htmlFor="password">Password</label>
                                </div>

                                <div className="d-flex justify-content-between align-items-center">

                                    <Message2 message2={message2} />

                                </div>
                                <div className="text-center text-lg-start mt-4 pt-2">
                                    {flag?<button type="submit" disabled={crediential.email < 5 || crediential.name < 5 || crediential.password < 5} className="btn btn-primary btn-lg"
                                        style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}>Register</button>:<Loader Loader={Loader}/>}
                                    <p className="small fw-bold mt-2 pt-1 mb-0">Already have an account? <Link to="/login"
                                        className="link-danger">login</Link></p>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
                {/* footer */}

            </section>
        </div>
    )
}

export default Signup
