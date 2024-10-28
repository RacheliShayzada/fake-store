import React, { useState, useEffect } from 'react';
import { getElectronics } from '../Service/Services';
import styles from './Electronics.module.css'

function Electronics() {
    const [electronics, setElectronics] = useState([]); // הגדרת ערך התחלתי כרשימה ריקה

    useEffect(() => {
        getElectronics()
            .then((res) => {
                return res.json(); // חשוב לקרוא ל-JSON כאן
            })
            .then((data) => {
                setElectronics(data); // עדכון ה-state עם הנתונים
            })
            .catch((err) => {
                alert(err);
            });
    }, []);

    return (
        <div className={styles.container}>
            <h1>Electronics</h1>
            {electronics.length > 0 ? ( // בדיקה אם יש מוצרים
                <div className={styles.itemsContainer}>
                    {electronics.map((electronic) => (
                        <div className={styles.item} key={electronic.id}> {/* השתמש ב-li כאן כדי לשמור על סמנטיקה */}
                            <h3>{electronic.title}</h3> {/* השתמש ב-title לפי ה-API */}
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