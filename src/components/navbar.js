import { useState } from "react";
import "./navbar.css"
import { Squash as Hamburger } from 'hamburger-react'

// Navbar.js
function Navbar() {

  const [ isNavExpanded, setIsNavExpanded] = useState(false);

  const toggleNav = () => {
    setIsNavExpanded(!isNavExpanded);
    document.body.classList.toggle('no-scroll');
  };

  const closeNav = () => {
    setIsNavExpanded(false);    
    document.body.classList.remove('no-scroll');
  };

  return (
    <nav className="navigation">

      <a href="/" className="greenhousespa">
        Greenhouse Spa
      </a>
      
      <div className="custom-hamburger">
        <Hamburger 
          rounded                 
          toggled={isNavExpanded} 
          toggle={setIsNavExpanded}
          onToggle={toggleNav}
        />   
      </div>

      <div className={ isNavExpanded ? "navigation-menu expanded" : "navigation-menu" }>
        <ul>          
          <li><a href='/home'>Home</a></li>
          <li><a href='/store'>Store</a></li>
          <li><a href='/services'>Services</a></li>
          <li><a href='/contact'>Contact</a></li>
        </ul>
      </div>

    </nav>
  );
}

export default Navbar;
