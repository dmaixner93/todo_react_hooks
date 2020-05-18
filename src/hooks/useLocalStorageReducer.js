import { useReducer, useEffect } from 'react';

// 'key' is the key for the item in window.localStorage
function useLocalStorageReducer(key, defaultVal, reducer) {
    const [state, dispatch] = useReducer(reducer, defaultVal, () => {
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
    })
    // use useEffect to update localStorage when state changes.
    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(state));
    }, [state, key]);
    return [state, dispatch];
};

export { useLocalStorageReducer };