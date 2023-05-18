import { useState, useEffect } from "react";

export default function useScrollBottom() {
    const [isBottom, setIsBottom] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            console.log(Math.ceil(document.documentElement.scrollTop + window.innerHeight));
            console.log(document.documentElement.offsetHeight);
            setIsBottom(Math.ceil(document.documentElement.scrollTop + window.innerHeight + 30) >= document.documentElement.offsetHeight);
        })
    }, []);

    return isBottom;
}


