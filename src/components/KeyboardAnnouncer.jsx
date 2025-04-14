import React, { useEffect } from "react";

const KeyboardAnnouncer = () => {
  useEffect(() => {
    const handleFocus = (e) => {
      const label = e.target.getAttribute("aria-label") || e.target.innerText || e.target.placeholder || "element";
      const utterance = new SpeechSynthesisUtterance(`Focused on ${label}`);
      speechSynthesis.cancel();
      speechSynthesis.speak(utterance);
    };

    document.addEventListener("focusin", handleFocus);
    return () => document.removeEventListener("focusin", handleFocus);
  }, []);

  return null;
};

export default KeyboardAnnouncer;
