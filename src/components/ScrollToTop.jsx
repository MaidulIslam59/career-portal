import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    console.log("Current pathname:", pathname); // Debugging log
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
