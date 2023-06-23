import React from 'react';
import BookButton from '../components/bookbutton';
import './landing.css';
import { LuLeaf } from "react-icons/lu";

 
const Landing = () => {
    return (
        <div className='landing-page'>     
            <h1 id='landing-title'>Welcome to Green House Spa of Warner Robins<LuLeaf/></h1>
            <div className='booking-button'>
                <BookButton/>
            </div>                                          
        </div>        
    );
};
 
export default Landing;