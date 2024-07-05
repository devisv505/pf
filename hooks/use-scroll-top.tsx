import {useEffect, useState} from "react";

export const useScrollTop = (threshold = 10) => {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handlerScroll = () => {
            if (window.scrollY > threshold) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handlerScroll)
        return () => window.removeEventListener('scroll', handlerScroll)
    }, [threshold]);

    return scrolled;
}