import React, { useState } from 'react';
import './gallery.css';

const Gallery = ({images}) => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [startX, setStartX] = useState(null);
    
    const goToPrevious = () => {
        const isFirstImage = currentIndex === 0;      
        setCurrentIndex( () => isFirstImage ? images.length - 1 : currentIndex - 1);
    };

    const goToNext = () => {
        const isLastImage = currentIndex === images.length - 1;
        setCurrentIndex(() => isLastImage ? 0 : currentIndex + 1);        
    };

    const goToImage = (imageIndex) => {
        setCurrentIndex(imageIndex);
    };

    const touchStart = (event) => {
        setStartX(event.touches[0].clientX);
    };

    const touchEnd = (event) => {
        const endX = event.changedTouches[0].clientX;
        const deltaX = startX - endX;
        const swipeThreshold = 50;

        if (deltaX > swipeThreshold) {
            goToNext();
        } else if (deltaX < -swipeThreshold) {
            goToPrevious();
        }
    };

    const beforeIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    const afterIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;

    return (
        <div            
            className='gallery'
            onTouchStart={touchStart}
            onTouchEnd={touchEnd}
        >

            <div    
                className='basic-arrow left-arrow'                
                onClick={goToPrevious}
            >❰</div> 

            <div     
                className='basic-arrow right-arrow'                
                onClick={goToNext}
            >❱</div>         

            <img 
                className='image preview-image before-image'                
                src={images[beforeIndex]}                
            />            

            <img               
                className='image'                
                src={images[currentIndex]}                
            />

            <img 
                className='image preview-image after-image'                 
                src={images[afterIndex]}                
            />

            <div                 
                className='dots-container'>
                {images.map((image, imageIndex) => (
                    <div 
                        key={imageIndex}                         
                        className={`dot ${imageIndex === currentIndex ? 'active' : ''}`}
                        onClick={() => goToImage(imageIndex)}
                    > ● </div>
                ))}
            </div>

        </div>
    );
};

export default Gallery;