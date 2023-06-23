import React from 'react';
import './footer.css';
import config from '../data/config';
import {FaCalendar, FaFacebook, FaInstagram, FaTwitter, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      
      <div className="above-column">
        <div className='gradient-underlay'></div>
        <span>Call <i>{config.phoneNumber}</i> with any questions.</span>
      </div>
      
      <div className="footer-content">
        
        <div className="footer-column hours">
          <h3>Hours</h3>
          <h5>Monday - Friday</h5>
          <p>{config.hours.weedays}</p>
          <h5>Saturday</h5>
          <p>{config.hours.saturday}</p>
          <h5>Sunday</h5>
          <p>{config.hours.sunday}</p>
        </div>
        
        <div className="footer-column socials">
          <h3>Socials</h3>
          <p>Follow us on:</p>
          <ul id='social-links'>
            <li><a href={config.facebook}><FaFacebook/></a></li>
            <li><a href={config.instagram}><FaInstagram/></a></li>
            {/* <li><FaTwitter/></li> */}
          </ul>
          <div id='business-email'>
            <p>Business inquiries:</p>
            <a href={`mailto:${config.email}`}><FaEnvelope/></a>
          </div>
        </div>
        
        <div className="footer-column location">
          <h3>Location</h3>
          <a href={config.mapsUrl}>
            <p>{config.location}</p>
            <p>{config.address}</p>
          </a>
          <hr/>
          <a href={`tel://${config.phoneNumber}`}><FaPhone/> {config.phoneNumber}</a>
          <a href="https://www.fresha.com/book-now/gg-nails-xls3yz6o/services?lid=286077&eid=848007&pId=266977"
            target='_blank'
            rel='noopener noreferrer'>
            <p><FaCalendar/> Book Appointment</p>
          </a>
        </div>

      </div>
      
    </footer>
  );
};

export default Footer;
