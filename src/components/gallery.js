import React from "react";
import './gallery.css';
import img1 from "../images/about/img1.jpg";
import img2 from "../images/about/img2.jpg";
import img3 from "../images/about/img3.jpg";
import img4 from "../images/about/img4.jpg";

const Gallery = () => {

    const images = [img1,img2,img3,img4];

    return (
        <div className="gallery">
            {images.map((image, index) => (
                <img key={index} src={image} alt={`Image ${index}`} />
            ))}
        </div>
    );
};

export default Gallery;