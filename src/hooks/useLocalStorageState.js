import { useState, useEffect } from 'react';

// 'key' is the key for the item in window.localStorage
function useLocalStorageState(key, defaultVal) {
    const [state, setState] = useState(() => {
        let val;
        try {
            val = JSON.parse(
                /** String(defaultVal) - if an object of tasks is hardcoded in TodoApp.js
                 * and nothing is returned from localStorage.getItem, String(defaultVal)
                 * is converted into a string so it can be parsed. 
                 */
                window.localStorage.getItem(key) || String(defaultVal)
            );
        } catch(e) {
            val = defaultVal;
        }
        return val;
    });
    // use useEffect to update localStorage when state changes.
    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(state));
    }, [state, key]);

    return [state, setState];
}

export default useLocalStorageState;