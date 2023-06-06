import React, { useEffect, useState } from 'react';
import BookButton from '../components/bookbutton';
import Card from '../components/card';
import cardsData from '../data/services.json';
import './home.css'
 
const Home = () => {

    const [cards, setCards] = useState([]);

    useEffect(() => {
        setCards(cardsData);
    }, []);

    return (
        <>
            <BookButton/>
            <div className='service-cards'>
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
 
export default Home;