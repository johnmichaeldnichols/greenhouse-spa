import React from 'react';
import BookButton from '../components/bookbutton';
import config from '../data/config';
import './contact.css';
 
const Contact = () => {   
    return (
        <div className='contact'>
            
            <h1>Book an Appointment</h1>
            <p>Call or text Green House Spa directly at: <a href={`tel://${config.phoneNumber}`}>{config.phoneNumber}</a> or book an appoint below using Fresha. Feel free to reach out with any questions you may have. </p>
            <BookButton/>
            <h5>How to</h5>
            <h1>Find Us</h1>

            <h3>Location</h3>
            <p>{config.location}</p>
            <p>{config.address}</p>

            <strong>Phone:</strong>
            <a href={`tel://${config.phoneNumber}`}> {config.phoneNumber}</a>
            <br/>
            <strong>Email:</strong>
            <a href={`mailto:${config.email}`}> {config.email}</a>
            
            <hr/>

            <h3>Hours</h3>
            <h5>Monday - Friday</h5>
            <p>{config.hours.weedays}</p>
            <h5>Saturday</h5>
            <p>{config.hours.saturday}</p>
            <h5>Sunday</h5>
            <p>{config.hours.sunday}</p>            

            <iframe 
                className='map' 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3360.7385560091493!2d-83.6555003228977!3d32.61315019233966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f3e1134015e041%3A0x4902dc902cd1c303!2sGreen%20House%20Spa!5e0!3m2!1sen!2sus!4v1687546082610!5m2!1sen!2sus"  
                allowfullscreen=""
                frameBorder="0" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    );
};
 
export default Contact;