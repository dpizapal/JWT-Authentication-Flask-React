import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const token = sessionStorage.getItem("token");
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">HOME</span>
        </Link>
        <Link to="/">
          <button
            className="btn btn-danger"
            onClick={() => {
              actions.logout();
            }}
          >
            LOG OUT
          </button>
        </Link>

        <div className="ml-auto">
          <Link to="/demo">
            <button className="btn btn-primary">
              Check the Context in action
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
