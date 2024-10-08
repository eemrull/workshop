import { useState, useEffect } from "react";

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);
    handleResize(); // Call the function immediately to set the initial size.

    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures this effect is only run on mount and unmount.

  return windowSize;
}

export default useWindowSize;
