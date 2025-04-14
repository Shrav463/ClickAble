import React, { useState, useRef } from "react";

// 🔊 Speak text aloud (with optional language)
const speak = (text, lang = "en-US") => {
  if ("speechSynthesis" in window) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    utterance.rate = 1; // Normal speed
    utterance.pitch = 1;
    speechSynthesis.cancel(); // Stop previous speech
    speechSynthesis.speak(utterance);
  }
};

const Nav = () => {
  const [showLangMenu, setShowLangMenu] = useState(false);
  const timeoutRef = useRef(null);

  const languages = [
    { label: "English", code: "en-US" },
    { label: "Hindi", code: "hi-IN" },
    { label: "Spanish", code: "es-ES" },
    { label: "French", code: "fr-FR" },
    { label: "German", code: "de-DE" },
  ];

  const openMenu = () => {
    clearTimeout(timeoutRef.current);
    setShowLangMenu(true);
  };

  const closeMenu = () => {
    timeoutRef.current = setTimeout(() => {
      setShowLangMenu(false);
    }, 200);
  };

  return (
    <nav className="bg-blue-900 text-white px-6 py-3 flex justify-between items-center shadow-md relative">
      {/* Left Navigation */}
      <div className="flex space-x-6 text-sm font-semibold">
        {["For Individuals", "For Businesses", "For Universities", "For Governments"].map((item) => (
          <span
            key={item}
            className="cursor-pointer hover:underline"
            onMouseEnter={() => speak(item)}
            tabIndex="0"
            aria-label={item}
          >
            {item}
          </span>
        ))}
      </div>

      {/* Right Navigation */}
      <div className="flex items-center space-x-4 text-sm">
        {/* Language Dropdown */}
        <div
          className="relative"
          onMouseEnter={openMenu}
          onMouseLeave={closeMenu}
        >
          <span
            className="cursor-pointer hover:underline flex items-center"
            tabIndex="0"
            aria-label="Language Selector"
          >
            Language 🌐
          </span>

          {showLangMenu && (
            <ul className="absolute top-7 right-0 bg-white text-black shadow-lg rounded w-40 z-50">
              {languages.map((lang) => (
                <li
                  key={lang.code}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                  onMouseEnter={() => speak(lang.label, lang.code)}
                >
                  {lang.label}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Icons with speech */}
        <span onMouseEnter={() => speak("Notifications")} className="cursor-pointer">🔔</span>
        <span onMouseEnter={() => speak("Save")} className="cursor-pointer">💾 Save</span>
        <div
          onMouseEnter={() => speak("Profile")}
          className="rounded-full bg-white text-black w-6 h-6 flex items-center justify-center text-xs font-bold cursor-pointer"
        >
          S
        </div>
      </div>
    </nav>
  );
};

export default Nav;
