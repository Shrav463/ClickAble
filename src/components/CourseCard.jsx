import React from "react";
import { useNavigate } from "react-router-dom";

// 🎙️ Text-to-speech function
const speak = (text) => {
  if (window.speechSynthesis) {
    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.cancel();
    speechSynthesis.speak(utterance);
  }
};

const CourseCard = ({ title, subtitle, image, badge, slug }) => {
  const navigate = useNavigate();

  const handleHover = () => {
    const message = `${title}. ${subtitle}. Offered by Google.`;
    speak(message);
  };

  const handleClick = () => {
    if (slug) {
      navigate(`/courses/${slug}`);
    } else {
      console.warn("Missing slug for course:", title);
    }
  };

  return (
    <div
      tabIndex="0"
      role="button"
      className="bg-white rounded-xl shadow-md p-4 w-full max-w-xs hover:shadow-lg transition-shadow duration-200 cursor-pointer outline-none focus:ring-2 focus:ring-blue-600"
      onMouseEnter={handleHover}
      onClick={handleClick}
      onKeyDown={(e) => e.key === "Enter" && handleClick()}
      aria-label={`${title}. ${subtitle}. Click to learn more.`}
    >
      <div className="relative">
        <img src={image} alt={title} className="rounded-md mb-3 w-full h-40 object-cover" />
        {badge && (
          <span className="absolute top-2 right-2 bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">
            {badge}
          </span>
        )}
      </div>

      <div className="text-left">
        <p className="text-sm text-gray-900">Google</p>
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <p className="text-xs text-blue-700 underline">Build toward a degree</p>
        <p className="text-xs text-gray-900">{subtitle}</p>
      </div>
    </div>
  );
};

export default CourseCard;
