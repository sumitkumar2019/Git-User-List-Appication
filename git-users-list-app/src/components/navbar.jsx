import React from "react";
import { Link, NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top p">
      <Link className="navbar-brand" to="/">
        <img
          src="/github.png"
          style={{ width: "50px", height: "50px" }}
          alt=""
        />
      </Link>
      <ul className="nav navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link font-weight-bold" to="/users">
            Github Bangalore Users
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
