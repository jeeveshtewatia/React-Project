import React from "react";
import { Link } from "react-router-dom";
import "./Style.css";

const Navbar = () => {
  return (
    <div>
      <Link to="/" className="navlink">
        <div className="main  animate__animated animate__zoomInDown">
          <p>The</p>
          <h1 className="siren ">Siren</h1>
        </div>
      </Link>
      <div className="navbar">
        <Link to="/" className="navlink animate__animated animate__slideInDown">
          Home
        </Link>
        <Link
          to="/category/Bollywood"
          className="navlink animate__animated animate__slideInDown"
        >
          Bollywood
        </Link>
        <Link
          to="/category/Technology"
          className="navlink animate__animated animate__slideInDown"
        >
          Technology
        </Link>
        <Link
          to="/category/Hollywood"
          className="navlink animate__animated animate__slideInDown"
        >
          Hollywood
        </Link>
        <Link
          to="/category/Fitness"
          className="navlink animate__animated animate__slideInDown"
        >
          Fitness
        </Link>
        <Link
          to="/category/Food"
          className="navlink animate__animated animate__slideInDown"
        >
          Food
        </Link>
      </div>
      <hr />
    </div>
  );
};

export default Navbar;
