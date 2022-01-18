import React from "react";
import img1 from "../images/logo3.png"
// import "./node_modules/bootstrap/dist/css/bootstrap-grid.css";
// import "...../node_modules/bootstrap/dist/css/bootstrap-grid.css"
// import "./node_modules/bootstrap/dist/css/bootstrap-grid.min.css";
// import "...../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/css/bootstrap-grid.css"
import { NavLink } from "react-router-dom";


function Header()
{
    return(
        <>
      <div className="fix">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand logo-menu" href="#">
      <img className="logo-image" src={img1} alt="" />
      </a>
      <div className="space"></div>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
      <ul id="menu" className="navbar-nav menu-ul">
      <NavLink className="nav-item nav-a " activeclassname="active" exact="true" to="/">
      მთავარი<span className="sr-only"></span>
      </NavLink>
      <NavLink className="nav-item nav-a " activeclassname="active" exact="true" to="/Main1">
      გუნდი
      </NavLink>
      <NavLink className="nav-item nav-a " activeclassname="active" exact="true" to="/Main2">
      კურსები
      </NavLink>
      <NavLink className="nav-item nav-a " activeclassname="active" exact="true" to="/Main3">
      კონტაქტი
      </NavLink>
    </ul>
    <div className="Num">
    <li className="nav-a">
    <a className="nav-link number" href="tel:+99532222222">+99532222222</a>
    </li>
    </div>
    <div className="space"></div>
  </div>
</nav>
</div>
<>


 
  

 
</>
        </>
    )
}
export default Header;