import {useRef,useEffect,useState} from 'react'

export function useDebouncer(sendDataToBackend){
    const currentClock=useRef();

    const fn=()=>{
        clearTimeout(currentClock.current);
        currentClock.current=setTimeout(sendDataToBackend,200);
    }

    return fn;
}

export const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return debouncedValue;
};
