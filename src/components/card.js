import React from 'react';
import './card.css';

const Card = ({ image, title, description }) => {
  return (
    <div className='card'>
      <img src={image} alt={title} className='card-image'/>
      <div>
        <h2 className='card-title'>{title}</h2>
        <p className='card-description'>{description}</p>
      </div>      
    </div>
  );
};

export default Card;