import React from 'react';

export const useLocalStorage = (key: string, defauValue: any)  => {
    const keyRef = React.useRef(key);
    keyRef.current = key;
    const [data, setData] = React.useState(() => {
        const lsData = localStorage.getItem(keyRef.current)
        return lsData ? JSON.parse(lsData) : defauValue
    })

    // const updateStorageData = React.useCallback(() => {
    //     if(localStorage.getItem(keyRef.current) != null && localStorage.getItem(keyRef.current) !== data) {
            
    //     }
    // }, [data])

    // React.useEffect(() => {
    //     window.addEventListener('storage', updateStorageData)

    //     return () => {
    //         window.removeEventListener('storage', updateStorageData)
    //     }
    // },[updateStorageData])

    const updateData = React.useCallback((newValue) => {
        setData(newValue)
        localStorage.setItem(keyRef.current, JSON.stringify(newValue));
    }, [])
    return [data, updateData]
}