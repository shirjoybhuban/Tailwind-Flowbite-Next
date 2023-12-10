import { useState, useEffect, useRef } from 'react';

export default function useDestinationPostalDropdown(initialIsVisible) {
    const [isPostalDropdownVisible, setIsPostalDropdownVisible] = useState(initialIsVisible);
    const postalDropdownRef = useRef(null);

    const handleClickOutside = (event) => {
        if (postalDropdownRef.current && !postalDropdownRef.current.contains(event.target)) {
            setIsPostalDropdownVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);

    return { postalDropdownRef, isPostalDropdownVisible, setIsPostalDropdownVisible };
}