import React from 'react';
import BookButton from '../components/bookbutton';
import './landing.css';
 
const Landing = () => {
    return (
        <div className='landing-page'>            
            <img id='landing-image' src='../images/8606360.jpg' alt=''/>
            <BookButton/>
        </div>        
    );
};
 
export default Landing;