import { useEffect, useRef } from 'react'

export function usePrev(value) {
    const ref = useRef();

    useEffect(() => {
        ref.current = value;
    }, [value]);

    return {
        ref: ref.current
    }; //It returns first then calls the effect, so useEffect will be called later.
}