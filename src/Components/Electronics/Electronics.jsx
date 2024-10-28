import React, { useState, useEffect } from 'react';
import { getElectronics } from '../Service/Services';
import styles from './Electronics.module.css'

function Electronics() {
    const [electronics, setElectronics] = useState([]); 

    useEffect(() => {
        getElectronics()
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setElectronics(data); 
            })
            .catch((err) => {
                alert(err);
            });
    }, []);

    return (
        <div className={styles.container}>
            <h1>Electronics</h1>
            {electronics.length > 0 ? ( 
                <div className={styles.itemsContainer}>
                    {electronics.map((electronic) => (
                        <div className={styles.item} key={electronic.id}> 
                            <h3>{electronic.title}</h3>
                            <img src={electronic.image} alt={electronic.title} />
                            <p><strong>Price: ${electronic.price}</strong></p>
                            <div className={styles.descriptionContainer}>
                                <p>{electronic.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p>Loading...</p> // הוספת הודעת טוען
            )}
        </div>
    );
}

export default Electronics;