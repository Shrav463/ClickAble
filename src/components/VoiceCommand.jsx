import React, { useEffect, useState } from "react";

const VoiceCommand = () => {
  const [transcript, setTranscript] = useState("");

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Speech recognition is not supported in this browser.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = false;

    recognition.onresult = (event) => {
      const lastResult = event.results[event.results.length - 1][0].transcript.trim().toLowerCase();
      setTranscript(lastResult);
      handleCommand(lastResult);
    };

    recognition.start();

    return () => recognition.stop();
  }, []);

  const handleCommand = (command) => {
    if (command.includes("help")) {
      speak("You said help. Here’s how to get assistance...");
    } else if (command.includes("read page")) {
      speak(document.body.innerText);
    } else {
      speak("Sorry, I didn’t understand that command.");
    }
  };

  const speak = (message) => {
    const utterance = new SpeechSynthesisUtterance(message);
    speechSynthesis.cancel();
    speechSynthesis.speak(utterance);
  };

  return <div className="sr-only">Voice Command Active: {transcript}</div>;
};

export default VoiceCommand;
