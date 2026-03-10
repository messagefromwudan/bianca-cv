"use client";

import { useEffect } from "react";

export default function SectionObserver() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("section--visible");
            entry.target.classList.remove("section--hidden");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("section:not(#hero)").forEach((el) => {
      el.classList.add("section--hidden");
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
