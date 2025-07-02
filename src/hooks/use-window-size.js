"use client";

import { useDebugValue, useEffect, useState } from "react";

const useWindowSize = () => {
  const [size, setSize] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  useDebugValue(`device: ${size.width < 768 ? "mobile" : "desktop"}`);

  const handleResize = () => {
    setSize({
      height: window.innerHeight,
      width: window.innerWidth,
    });
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    height: size.height,
    width: size.width,
  };
};

export default useWindowSize;
