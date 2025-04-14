// utils/speak.js
export const speak = (text) => {
  if (!window.speechSynthesis) return;

  // Cancel ongoing speech before starting new
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 1; // Adjust rate if needed
  utterance.pitch = 1;
  utterance.lang = "en-US";

  window.speechSynthesis.speak(utterance);
};
