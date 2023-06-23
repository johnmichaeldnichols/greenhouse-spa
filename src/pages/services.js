import React, { useEffect, useState } from 'react';
import BookButton from '../components/bookbutton';
import Card from '../components/card';
import cardsData from '../data/services.json';
import './services.css'
import padicure from '../images/services/pedicure.jpg'
import waxing from '../images/services/waxing.jpg';
 
const Services = () => {

    const [cards, setCards] = useState([]);

    useEffect(() => {
        setCards(cardsData);
    }, []);

    return (
        <>
            <div className='service-cards-container'>
                {cards.map((card, index) => (
                    <Card
                        key={index}
                        image={card.image}
                        title={card.title}
                        description={card.description}
                    />
                ))}       
            </div>
            
        </>
    );
};
 
export default Services;