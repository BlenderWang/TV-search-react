import { useState, useRef, useEffect } from "react";

const useSize = () => {
    const elementRef = useRef(null);
    const [width, setWidth] = useState(0);

    useEffect(() => {
        setWidth(110);
    }, []);

    return { width, elementRef };
};

export default useSize;
