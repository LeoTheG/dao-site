"use client";
import React, { PropsWithChildren, useEffect, useRef, useState } from "react";

export const SlideIn: React.FC<
  PropsWithChildren<{ isSlideFromLeft?: boolean }>
> = ({ children, isSlideFromLeft }) => {
  const [shouldSlideIn, setShouldSlideIn] = useState(false);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (contentRef.current) {
        const contentPosition = contentRef.current.getBoundingClientRect();
        if (contentPosition.top < window.innerHeight * 0.9) {
          setShouldSlideIn(true);
          window.removeEventListener("scroll", handleScroll);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    if (contentRef.current) handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={contentRef}
      className={`transition-transform duration-1000 transform ${
        shouldSlideIn
          ? "translate-x-0"
          : isSlideFromLeft
          ? "-translate-x-[120%]"
          : "translate-x-[120%]"
      }`}
    >
      {children}
    </div>
  );
};
