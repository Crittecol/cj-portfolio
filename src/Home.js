import React, { useState, useEffect } from 'react';
import './App.css';
import { createClient } from "@supabase/supabase-js";

const supabase = createClient("https://ruddglcmdymjrttyvkku.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ1ZGRnbGNtZHltanJ0dHl2a2t1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODc4MjY1MzcsImV4cCI6MjAwMzQwMjUzN30.eMlZCOFKSgJp7NFrhLrtsMDz1VZFapElqmqehJEqns0");

const Home = () => {

    const [cards, setCards] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            const { data, error } = await supabase
                .from('projects')
                .select('*');
            
            if (error) {
                throw error;
            }
            //log data
            console.log("data ",data);
            setCards(data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className='grid-container'>
            {cards.map(card => (
                
                <div key={card.id} className="card">
                    <img src={card.image} alt={card.heading} className="card-image" />
                    <div className="card-content">
                        <h3 className="card-heading">{card.heading}</h3>
                        <ul className="card-list">
                            {card.listitems.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    );
   
}

export default Home;
