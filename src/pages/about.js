import React, { useState } from 'react';
import Gallery from '../components/gallery';
import './about.css';
import img1 from "../images/about/img1.jpg";
import img2 from "../images/about/img2.jpg";
import img3 from "../images/about/img3.jpg";
import img4 from "../images/about/img4.jpg";

const About = () => {

    const info = {
        name: "Green House Spa",
        address: "123 Main Street, City, State ZIP",
        description: 'Green House Spa is a full-service, relaxing, client first salon. We enjoy helping you improve your health and well-being through self-care.',
        about: `Welcome to our enchanting nail and esthetician salon, where beauty meets nature in perfect harmony. We take pride in offering a one-of-a-kind experience that blends relaxation, rejuvenation, and eco-consciousness. Inspired by nature's splendor, our space is adorned with lush foliage, cascading plants, and natural elements, creating an atmosphere of tranquility and connection.`,        
        missionStatement: 'Our mission at Green House Spa is simple yet profound. We strive to provide a safe, comfortable, and elevated experience to every guest who enters our doors. We offer an extensive range of services, meticulously crafted to cater to your unique desires and needs. Continuously driven by innovation, we explore new frontiers in the world of beauty and wellness, ensuring that our guests receive nothing but the finest and most cutting-edge treatments available.',
    };

    const images = [img1,img2,img3,img4];

    return (
        <div className='about'>
            <Gallery images={images}/>
            <div id='content'>
                <h2>{info.name}</h2>
                <p><i>{info.address}</i></p>
                <p>{info.description}</p>
                <h2>About</h2>
                <p>{info.about}</p>
                <h2>Mission</h2>
                <p>{info.missionStatement}</p>
            </div>
        </div>
    );
};
 
export default About;