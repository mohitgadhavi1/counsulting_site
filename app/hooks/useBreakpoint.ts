import { useEffect, useState } from "react";

const getWidth = () =>
    typeof window !== "undefined" ? window.innerWidth : 1024;

export function useBreakpoint() {
    const [width, setWidth] = useState(getWidth);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const isMobile = width < 640;
    const isTablet = width >= 640 && width < 1024;

    return {
        width,
        isMobile,
        isTablet,
    };
}
