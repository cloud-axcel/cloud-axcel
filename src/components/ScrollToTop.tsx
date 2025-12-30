import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scrolls to the top left corner instantly
    window.scrollTo(0, 0);
  }, [pathname]); // Reruns when the path changes

  return null;
}
