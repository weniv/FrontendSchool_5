import { useState, useEffect } from "react";


export default function useMouseLocation(iniVal) {
    const [mouseLocation, setMouseLocation] = useState(iniVal || { x: 0, y: 0 });

    useEffect(() => {
        window.addEventListener('mousemove', (event) => {
            setMouseLocation({ x: event.x, y: event.y });
        });
    }, []);

    return mouseLocation
}



