import React, { useState, useEffect } from 'react';
import { fetchWithCache } from '../Service/Services'; // עדכן את ה-import בהתאם
import styles from './Items.module.css'; // ודא שהשמות תואמים

function ShowItems({ category }) {
    const [items, setItems] = useState([]); 

    useEffect(() => {
        const fetchItems = async () => {
            const data = await fetchWithCache(category);
            setItems(data); 
        };
        
        fetchItems();
    }, [category]); // הוספת category כתלות כדי לעדכן אם הוא משתנה

    return (
        <div className={styles.container}>
            <h1>{category.charAt(0).toUpperCase() + category.slice(1)}:</h1>
            {items.length > 0 ? ( // בדיקה אם יש מוצרים
                <div className={styles.itemsContainer}>
                    {items.map((item) => (
                        <div className={styles.item} key={item.id}> 
                            <h3>{item.title}</h3>
                            <img src={item.image} alt={item.title} />
                            <p><strong>Price: ${item.price}</strong></p>
                            <div className={styles.descriptionContainer}>
                                <p>{item.description}</p>
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

export default ShowItems;
