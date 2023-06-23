import React from 'react';
import BookButton from '../components/bookbutton';
import config from '../data/config';
 
const Contact = () => {
    return (
        <>

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

            {/* Google Maps component  */}
        </>
    );
};
 
export default Contact;