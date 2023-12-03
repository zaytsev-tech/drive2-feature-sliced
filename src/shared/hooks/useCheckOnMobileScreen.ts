import { useEffect, useState } from "react";
import { SCREEN_SIZE_PX } from "shared/styles/screenSizes";

export const useCheckOnMobileScreen = () => {
  const [isMobileScreen, setIsMobileScreen] = useState(false);

  const handleResizeWindow = () => {
    const width = window.innerWidth;

    if (width < SCREEN_SIZE_PX.tablet) {
      setIsMobileScreen(true);
    } else {
      setIsMobileScreen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResizeWindow);

    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  return { isMobileScreen };
};
