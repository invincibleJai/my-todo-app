import React from 'react';

export const useLocalStorage = (key: string, defauValue: any)  => {
    const keyRef = React.useRef(key);
    keyRef.current = key;
    const [data, setData] = React.useState(() => {
        const lsData = localStorage.getItem(keyRef.current)
        return lsData ? JSON.parse(lsData) : defauValue
    })

    const updateData = React.useCallback((newValue) => {
        setData(newValue)
        localStorage.setItem(keyRef.current, JSON.stringify(newValue));
    }, [])
    return [data, updateData]
}