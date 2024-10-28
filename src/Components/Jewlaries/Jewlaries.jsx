import React, { useState, useEffect } from 'react';
import { getJewlaries } from '../Service/Services';
import styles from '../Electronics/Electronics.module.css'

function Jewlaries() {
    const [Jewlaries, setJewlaries] = useState([]); 

    useEffect(() => {
        getJewlaries()
            .then((res) => {
                return res.json(); 
            })
            .then((data) => {
                setJewlaries(data); 
            })
            .catch((err) => {
                alert(err);
            });
    }, []);

    return (
        <div className={styles.container}>
            <h1>Jewlaries:</h1>
            {Jewlaries.length > 0 ? ( // בדיקה אם יש מוצרים
                <div className={styles.itemsContainer}>
                    {Jewlaries.map((jewlaries) => (
                        <div className={styles.item} key={jewlaries.id}> 
                        <h3>{jewlaries.title}</h3>
                        <img src={jewlaries.image} alt={jewlaries.title} />
                        <p><strong>Price: ${jewlaries.price}</strong></p>
                        <div className={styles.descriptionContainer}>
                            <p>{jewlaries.description}</p>
                        </div>
                    </div>
                    ))}
                </div>
            ) : (
                <p>Loading...</p> 
            )}
        </div>
    );
}

export default Jewlaries;


