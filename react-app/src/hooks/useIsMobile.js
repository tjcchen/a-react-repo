/**
 * Determine if user is on a mobile screen
 * - Using a custom hook that's shared between React components
 * - <= 768 is mobile
 */
import { useEffect, useState } from "react";

export default function useIsMobile() {
  const [isMobile, setIsMobile] = useState(null);

  const calculateIsMobile = () => {
    if (window.innerWidth <= 768) {
      return setIsMobile(true);
    }
    return setIsMobile(false);
  };

  useEffect(() => {
    calculateIsMobile();
  }, []);

  window.addEventListener("resize", calculateIsMobile, false);

  return isMobile;
}
