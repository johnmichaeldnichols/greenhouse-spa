import React from 'react';
import BookButton from '../components/bookbutton';
import config from '../data/config';
import './contact.css';
import {FaCalendar, FaFacebook, FaInstagram, FaTwitter, FaPhone, FaEnvelope } from 'react-icons/fa';
 
const Contact = () => {   
    return (
        <div className='contact'>
            
            <div className='contact-hello'>
                <h3>Contact us</h3>
                <p>Reach out for any question or to book an appointment.</p>
            </div>
            
            <div className='column-container'>

                <div className='column hours-column'>
                    <h3>Hours</h3>
                    <h5>Monday - Friday</h5>
                    <p>{config.hours.weedays}</p>
                    <h5>Saturday</h5>
                    <p>{config.hours.saturday}</p>
                    <h5>Sunday</h5>
                    <p>{config.hours.sunday}</p>   
                </div>

                <div className='column links-column'>
                    <BookButton/>
                    <div className='social-links'>
                        <a href={config.facebook}><FaFacebook/></a>
                        <a href={config.instagram}><FaInstagram/></a>
                        <a href={`mailto:${config.email}`}><FaEnvelope/></a>
                    </div>                    
                </div>                

                <div className='column location-column'>
                    <h3>Location</h3>
                    <p>{config.location}</p>
                    <p>{config.address}</p>
                    <a href={`tel://${config.phoneNumber}`}><FaPhone/> {config.phoneNumber}</a>                                        
                </div>

            </div>

            <iframe 
                className='map' 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d499.5773145123537!2d-83.65316743125067!3d32.61305354375576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f3e1134015e041%3A0x4902dc902cd1c303!2sGreen%20House%20Spa!5e0!3m2!1sen!2sus!4v1687565490292!5m2!1sen!2sus"                
                allowfullscreen=""
                frameBorder="0" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    );
};
 
export default Contact;