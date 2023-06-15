// import React, { useReducer } from "react";
import './gallery.css';
import img1 from "../images/about/img1.jpg";
import img2 from "../images/about/img2.jpg";
import img3 from "../images/about/img3.jpg";
import img4 from "../images/about/img4.jpg";

// import React, { Component } from 'react';
// import Carousel from '@brainhubeu/react-carousel';
// import '@brainhubeu/react-carousel/lib/style.css';


const Gallery = () => {

    const images = [img1,img2,img3,img4];

// export default class Gallery extends Component {
//   render() {
//     return (
//       <Carousel>
//         <img src={img1} />
//         <img src={img2} />
//         <img src={img3} />
//         <img src={img4} />
//       </Carousel>
//     );
//   }
// };

    return (
        <div className="gallery">
            {images.map((image, index) => (
                <img key={index} src={image} alt={`Image ${index}`} />
            ))}
        </div>
    );
};

export default Gallery;