import React from "react";
import logo from "../image/logo2.png";
const NavBar = () => {
    return (
        
            <nav className="navbar navbar-expand-lg navbar-light " >
            
  <a className="navbar-brand" href="#"><img src={logo} className="img1"/></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#About">about</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#portfolio">portfolio</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#contact">contact</a>
      </li>
    </ul>
  </div>

</nav>
        
    )
}

export default NavBar;
