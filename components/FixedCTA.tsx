"use client";

import { useEffect, useState } from "react";

export default function FixedCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const formElement = document.getElementById("form-section");
      if (formElement) {
        const rect = formElement.getBoundingClientRect();
        // フォームが画面外にある時だけ表示
        setIsVisible(rect.bottom < 0 || rect.top > window.innerHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToForm = () => {
    const formElement = document.getElementById("form-section");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-3 bg-white/95 backdrop-blur-sm border-t">
      <div className="max-w-md mx-auto">
        <button
          onClick={scrollToForm}
          className="w-full bg-gradient-to-r from-primary to-accent text-white font-bold py-3 px-6 rounded-lg text-sm hover:shadow-md transition-all duration-200"
        >
          無料で転職相談する
        </button>
      </div>
    </div>
  );
}