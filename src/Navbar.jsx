import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./Custom-CSS.css";

function Navbar() {
  return (
    <div>
      <h1>
        <Link to="/">Home</Link>
      </h1>
      <h1>
        <Link to="/blogs">Blogs</Link>
      </h1>
      <h1>
        <Link to="/contact">Contact</Link>
      </h1>
      <h1>
        <Link to="/login">Login</Link>
      </h1>
      <h1 className="h1-thick">Titles and Patents</h1>
      <hr className="hr" />
    </div>
  );
}

export default Navbar;
