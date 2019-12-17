
import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <p className="title">Google Books</p>
      <a className="nav-link" href="/">Search</a>
      <a className="nav-link" href="/saved">Saved</a>
    </nav>)
}

export default Navbar;