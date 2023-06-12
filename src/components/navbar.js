import { useState } from "react";
import "./navbar.css";
import { Squash as Hamburger } from 'hamburger-react';
import logo from "../images/logo/green-house-spa-high-resolution-logo-black-on-transparent-background-1.png";

function Navbar() {

  const [ isNavExpanded, setIsNavExpanded] = useState(false);

  const toggleNav = () => {
    setIsNavExpanded(!isNavExpanded); //maybe don't need this line, redundent 
    document.body.classList.toggle('no-scroll');
  }

  // const primaryNav = document.querySelector('.navigation');
  // const intersectionWatcher = document.createElement('div');

  // intersectionWatcher.setAttribute('data-scroll-watcher', '');
  // primaryNav.before(intersectionWatcher);

  // const navObserver = new IntersectionObserver((entries) => {
  //   primaryNav.classList.toggle('sticking', !entries[0].isIntersecting);
  // }, {rootMargin: '200px 0px 0px 0px'});

  // navObserver.observe(intersectionWatcher);

  return (
    <nav className="navigation">

      <div className="custom-hamburger">
        <Hamburger 
          rounded                 
          toggled={isNavExpanded} 
          toggle={setIsNavExpanded}
          onToggle={toggleNav}
        />   
      </div>

      <a href="/" className="greenhousespa greenhousespa-mobile"><img src={logo}></img></a> 

      <div className={ isNavExpanded ? "navigation-menu expanded" : "navigation-menu" }>
        <ul>          
          <li><a href='/about' className="hoverable">About</a></li>
          <li><a href='/store' className="hoverable">Store</a></li>
          <li><a href='/' className="greenhousespa greenhousespa-desktop"><img src={logo}></img></a> </li>
          <li><a href='/services' className="hoverable">Services</a></li>
          <li><a href='/contact' className="hoverable">Contact</a></li>
        </ul>

        
      </div>
           
    </nav>
  );
}

export default Navbar;
