import React from 'react';
import BookButton from '../components/bookbutton';
import './landing.css';
import landingImage from '../images/splash-image.jpg';
 
const Landing = () => {
    return (
        <div className='landing-page'>      
            <div className='booking-button'>
                <BookButton/>
            </div>                                          
        </div>        
    );
};
 
export default Landing;