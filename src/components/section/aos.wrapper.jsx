import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

export const AosWrapper = ({ children }) => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return <>{children}</>;
};
