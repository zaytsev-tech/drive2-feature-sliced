import { useLayoutEffect, useState } from "react";

export const useCheckScreenSize = () => {
  const [screenSize, setScreenSize] = useState(0);

  useLayoutEffect(() => {
    setScreenSize(window.innerWidth);

    window.addEventListener("resize", () => {
      setScreenSize(window.innerWidth);
    });

    return () => {
      window.removeEventListener("resize", () => {
        setScreenSize(window.innerWidth);
      });
    };
  }, []);

  return { screenSize };
};
