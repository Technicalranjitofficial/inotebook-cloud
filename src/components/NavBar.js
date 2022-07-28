import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const NavBar = () => {
  const host = "https://inotebakend.herokuapp.com";
  let location = useLocation();
  const history = useNavigate();
  const [user, setUser] = useState("Loading..");
  const logout = () => {
    localStorage.removeItem('token');
    history('/login');
    setUser("Loading..")
  }

  const getuser = async () => {
    const response = await fetch(`${host}/api/auth/getuser`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },

    });
    const json = await response.json();
    console.log(json.user.name)
    setUser(json.user.name)
  }

  const ref = useRef(null);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      getuser();

    }

  })

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          iNotebook
        </a>
        <button
          ref={ref}
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} aria-current="page" to="/about">
                About
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/notes" ? "active" : ""}`} aria-current="page" to="/notes">
                Notes
              </Link>
            </li> */}
          </ul>
          {!localStorage.getItem('token') ? <div className="d-flex"><Link className="btn btn-primary mx-2" to="/login" role="button">Login</Link>
            <Link className="btn btn-primary mx-2" to="/signup" role="button">Signup</Link>
          </div> : <div className="btn-group">
            <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
             {user}
            </button>
            <div className="dropdown-menu dropdown-menu-right">
              <button className="dropdown-item" onClick={logout} type="button">Logout</button>
             
            </div>
          </div>}




        </div>
      </div>
    </nav>
  );
};

export default NavBar;
