import React from "react";
import "/node_modules/bootstrap/dist/css/bootstrap-grid.css";
import "/node_modules/bootstrap/dist/css/bootstrap-grid.min.css";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import img1 from "../images/logo3.png"
import { NavLink } from "react-router-dom";



function Footer()
{
    return(
        <>
           <footer className="footer p-0">
        <div className="nav1 p-0">
          <div className="space"></div>
          <a className="logo-menu" href="index.html">
            <img className="logo-image" src={img1} alt="logo" />
          </a>
          <div className="navigacia1">
            <div className=" color-change1 foot-nav p-0">
              <ul className="p-0  menu1">
              <li className="menu1">
                <NavLink className="menu1" exact="true" to="/">
                მთავარი
                </NavLink></li>
                <li> <NavLink className="menu1" exact="true" to="/Main1">
                გუნდი
               </NavLink></li>
              <li><NavLink className="menu1" exact="true" to="/Main2">
              კურსები
                </NavLink></li>
                <li> <NavLink className="menu1" exact="true" to="/Main3">
                ბლოგი
               </NavLink></li>
              </ul>
            </div>
            <div className="foot-social-icon">
              <i className="color-change fab fa-facebook-square foot-fa"></i>
              <i className="color-change fab fa-instagram-square foot-fa"></i>
              <i className="color-change fab fa-twitter foot-fa"></i>
              <i className="color-change fab fa-youtube foot-fa"></i>
              <i className="color-change fab fa-linkedin foot-fa"></i>
            </div>                
          </div>            
        </div>      
      </footer>   
        </>
    )
}
export default Footer;