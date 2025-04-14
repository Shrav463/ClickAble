import React, { useEffect } from "react";

const AutoReader = ({ text }) => {
  useEffect(() => {
    if (text) {
      const utterance = new SpeechSynthesisUtterance(text);
      speechSynthesis.cancel(); // Stop ongoing speech
      speechSynthesis.speak(utterance);
    }
  }, [text]);

  return null;
};

export default AutoReader;
