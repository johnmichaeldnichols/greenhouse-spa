import React from 'react';
import backSplashImage from '../assets/images/store-wrapper.jpg';
import './store.css';
 
const Store = () => {

    const storeContentOverlay = {          
        display: 'flex',
        flexDirection: 'column',

        margin: '0 1rem',

        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',     

        gap: '2rem',        
        color: 'var(--dark-green)',                        
    }

    const header = {
        color: 'var(--primary-color)',
    }

    return (        
        <div className='store' >
            {/* <img style={backdropImage} src={backSplashImage}/> */}
            <div style={storeContentOverlay}>
                <h1 style={header}>Greenhouse Spa Online Store is still under construction. </h1>
                <p>We at Green House Spa are in the planning stage of setting up a store with custom Green House Spa clothing, health products, and general cute things!</p>
                <p>If you are interested in, please notify us to expidite the process of setting one up.</p>                            
            </div>                
        </div>        
    );
};
 
export default Store;