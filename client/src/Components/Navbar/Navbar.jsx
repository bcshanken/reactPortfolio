import React from "react";
import { Link, NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          Brian Shanken
        </Link>
          

        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <span className="navbar-toggler-icon"></span>
          <div className="navbar-nav">
            
              <NavLink className="nav-link active" to="/about">About</NavLink>
              <NavLink className="nav-link active" to="/contact">Contact</NavLink>
              <NavLink className="nav-link active" to="/portfolio">Portfolio</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
