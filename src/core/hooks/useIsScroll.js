import React, { useEffect, useState } from "react";

const useIsScroll = (showBelow) => {
  const [isScroll, setIsScroll] = useState(false);

  // Initial if user first go into
  useEffect(() => {
    if (window.pageYOffset > showBelow) {
      setIsScroll(true);
    }
  }, [])

  const handleDisplay = () => {
    if (window.pageYOffset > showBelow) {
      if (!isScroll) setIsScroll(true);
    } else {
      if (isScroll) setIsScroll(false);
    }
  };

  useEffect(() => {

    window.addEventListener("scroll", handleDisplay);
    return () => {
      window.removeEventListener("scroll", handleDisplay);
    };

  }, [isScroll])

  return { isScroll, setIsScroll }

}

export default useIsScroll
