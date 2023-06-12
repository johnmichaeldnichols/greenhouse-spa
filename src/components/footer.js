import React from 'react';
import './footer.css';
import {FaCalendar, FaFacebook, FaInstagram, FaTwitter, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="above-column">
        <div className='gradient-underlay'></div>
        <span>Call <i>123-456-7890</i> with any questions.</span>
      </div>
      <div className="footer-content">
        <div className="footer-column hours">
          <h3>Hours</h3>
          <h5>Monday - Friday</h5>
          <p>9am - 6pm</p>
          <h5>Saturday</h5>
          <p>10am - 4pm</p>
          <h5>Sunday</h5>
          <p>Closed</p>
        </div>
        <div className="footer-column socials">
          <h3>Socials</h3>
          <p>Follow us on:</p>
          <ul id='social-links'>
            <li><FaFacebook/></li>
            <li><FaInstagram/></li>
            <li><FaTwitter/></li>
          </ul>
          <div id='business-email'>
            <p>Business inquiries:</p>
            <p><FaEnvelope/> <span>greenhousewr</span></p>
          </div>
        </div>
        <div className="footer-column location">
          <h3>Location</h3>
          <p>123 Main Street</p>
          <p>City, State 12345</p>
          <hr/>
          <p><FaPhone/> 123-456-7890</p>
          <p><FaCalendar/> Book Appointment</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
