import React from 'react';
import backSplashImage from '../images/store-wrapper.jpg';
 
const Store = () => {

    const storeContainer = {
        position: 'relative',
    }

    const backdropImage = {          
        marginTop: '-3rem',                 
        height: '100vh',     
        display: 'block',
        objectFit: 'cover',
        width: '100%',        
        zIndex: '-1',
    }

    const storeContentOverlay = {      
        inset: 0,
        position: 'absolute',      
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '2rem',        
        color: 'var(--dark-green)',                
        maxWidth: '33%',
        margin: '0 auto',   
        textAlign: 'center',     
    }

    const header = {
        color: 'var(--primary-color)',
    }

    return (        
        <div style={storeContainer}>
            <img style={backdropImage} src={backSplashImage}/>
            <div style={storeContentOverlay}>
                <h1 style={header}>Greenhouse Spa Online Store is still under construction. </h1>
                <p>We at Green House Spa are in the planning stage of setting up a store with custom Green House Spa clothing, health products, and general cute things!</p>
                <p>If you are interested in, please notify us to expidite the process of setting one up.</p>                            
            </div>                
        </div>        
    );
};
 
export default Store;