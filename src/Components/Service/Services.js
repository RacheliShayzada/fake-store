export async function fetchWithCache(category) {
    const cacheKey = `products_${category}`;
    const cacheTimeKey = `cache_time_${category}`;
    
    const now = new Date().getTime(); // זמן נוכחי במילישניות
    const oneMinute = 60 * 1000; // דקה במילישניות
    
    const cachedData = localStorage.getItem(cacheKey);
    const cachedTime = localStorage.getItem(cacheTimeKey);
    
    // אם יש נתונים ושעת הקריאה האחרונה הייתה בתוך הדקה האחרונה
    if (cachedData && cachedTime && (now - cachedTime < oneMinute)) {
        console.log('Returning cached data');
        return JSON.parse(cachedData);
    } else {
        try {
            console.log('running fetch request');
            const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            
            // שמור את הנתונים בלוקל סטורג עם הזמן הנוכחי
            localStorage.setItem(cacheKey, JSON.stringify(data));
            localStorage.setItem(cacheTimeKey, now.toString());
            
            return data;
        } catch (error) {
            console.error('Fetch error:', error);
            return []; // החזר מערך ריק במקרה של שגיאה
        }
    }
}

export function getJewlaries() {
    return fetchWithCache('jewelery');
}

export function getElectronics() {
    return fetchWithCache('electronics');
}
