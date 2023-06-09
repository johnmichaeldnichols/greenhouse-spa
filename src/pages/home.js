import React, { useState } from 'react';
import Gallery from '../components/gallery';
 
const Home = () => {

    const info = {
        name: "My Salong",
        address: "123 Main Street, City, State ZIP",
        description: "This is the best salong in the world!",
    };

    return (
        <>
            <Gallery/>
            <h2>{info.name}</h2>;
            <p>{info.address}</p>;
            <p>{info.description}</p>;
        </>
    );
};
 
export default Home;