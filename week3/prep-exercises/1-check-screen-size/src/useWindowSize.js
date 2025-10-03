import { useState, useEffect, useDebugValue } from "react";

export default function useWindowSize(label) {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () =>
      setSize({ width: window.innerWidth, height: window.innerHeight });

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // it shows the current window size when used multiple times in the same component using React DevTools
  useDebugValue(`${label}: ${size.width}x${size.height}`);

  return size;
}
