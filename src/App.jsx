import React from "react";
import { Routes, Route } from "react-router-dom";
import AutoReader from "./components/AutoReader";
import VoiceCommand from "./components/VoiceCommand";
import KeyboardAnnouncer from "./components/KeyboardAnnouncer";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import CourseCard from "./components/CourseCard";
import CourseDetail from "./components/CourseDetail";
import Login from "./components/Login";
import { speak } from "./utils/speak";

import image1 from "./assets/Google_cybersecurity_theme.jpeg";
import image2 from "./assets/Business_Intelligence.jpeg";
import image3 from "./assets/Advanced_Data_Analytics.jpeg";
import image4 from "./assets/Project_Management.jpeg";

const courseData = {
  "google-cybersecurity": {
    title: "Google Cybersecurity",
    description: "Protect organizations from cyber threats.",
    instructor: "Jane Doe",
    duration: "3 months",
    level: "Beginner",
    image: image1,
  },
  "google-business-intelligence": {
    title: "Google Business Intelligence",
    description: "Analyze and visualize business data.",
    instructor: "John Smith",
    duration: "4 months",
    level: "Intermediate",
    image: image2,
  },
  "google-advanced-data-analytics": {
    title: "Google Advanced Data Analytics",
    description: "Master predictive analytics and big data.",
    instructor: "Alice Johnson",
    duration: "5 months",
    level: "Advanced",
    image: image3,
  },
  "google-project-management": {
    title: "Google Project Management",
    description: "Lead projects with agile and scrum.",
    instructor: "Emily Lee",
    duration: "3 months",
    level: "Beginner",
    image: image4,
  },
};

const Home = () => (
  <main className="mt-6 space-y-4 min-h-screen text-black px-6 py-4">
    {/* 🟦 Hero section */}
    <div
      className="p-6 rounded shadow-md"
      style={{
        backgroundImage: 'url("/image.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className="text-3xl font-bold" onMouseEnter={() => speak("Welcome to ClickAble")}>
        Welcome to ClickAble
      </h1>
      <p onMouseEnter={() => speak("This is a voice-assisted, keyboard-navigable platform designed to help blind users access digital content.")}>
        This is a voice-assisted, keyboard-navigable platform designed to help blind users access digital content.
      </p>
    </div>

    {/* 🟦 Program Overview */}
    <section className="bg-white/80 backdrop-blur rounded shadow-md mt-8 p-6 space-y-6 text-black">
      <div className="bg-blue-900 text-white text-center py-6 rounded">
        <h2 className="text-3xl font-bold" onMouseEnter={() => speak("New York Tech Google Learning Program")}>
          New York Tech Google Learning Program
        </h2>
        <p className="text-lg" onMouseEnter={() => speak("Start Getting Certified With Google")}>
          Start Getting Certified With Google!
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 text-center">
        <div onMouseEnter={() => speak("No experience necessary")}>
          <p className="font-bold">No experience necessary</p>
          <p className="text-sm text-gray-600">Learn job-ready skills even with no experience or degree.</p>
        </div>
        <div onMouseEnter={() => speak("Learn at your own pace")}>
          <p className="font-bold">Learn at your own pace</p>
          <p className="text-sm text-gray-600">Finish the program on your own time and schedule.</p>
        </div>
        <div onMouseEnter={() => speak("Stand out to employers")}>
          <p className="font-bold">Stand out to employers</p>
          <p className="text-sm text-gray-600">Boost your resume with a certificate from Google.</p>
        </div>
      </div>

      {/* 🎓 Top Instructor section */}
      <div
        className="bg-blue-100 p-6 rounded text-center"
        onMouseEnter={() => speak("Top Instructor. 75 percent of Google Career Certificate Graduates report an improvement in their career trajectory within 6 months of completion.")}
      >
        <p className="text-sm text-blue-900">
          <span className="font-semibold bg-blue-800 text-white px-2 py-1 rounded mr-2">TOP INSTRUCTOR</span>
          <strong>75% of Google Career Certificate Graduates</strong> report an improvement in their career trajectory (e.g. new job, promotion or raise) within 6 months of completion.
        </p>
        <p className="text-xs mt-1 text-blue-900 italic">
          *Based on program graduate survey, United States 2022.
        </p>
      </div>
    </section>

    {/* 🟦 Course Cards Section */}
    <section className="mt-10 space-y-4">
      <div className="text-center">
        <h2 className="text-2xl font-bold" onMouseEnter={() => speak("Recommended by New York Tech")}>
          Recommended by New York Institute of Technology NYIT
        </h2>
      </div>

      <div className="flex flex-wrap gap-4 justify-center">
        {Object.entries(courseData).map(([slug, course]) => (
          <CourseCard
            key={slug}
            title={course.title}
            subtitle="Professional Certificate"
            image={course.image}
            badge={course.level === "Beginner" ? "New AI skills" : ""}
            slug={slug}
          />
        ))}
      </div>
    </section>
  </main>
);

const App = () => {
  const welcomeText = `
    Welcome to ClickAble. This accessibility toolkit was created to help completely blind users.
    You can speak commands like 'read page' or 'help' to interact with the system.
    Use Tab to navigate. Each element will be announced for your convenience.
  `;

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <AutoReader text={welcomeText} />
      <VoiceCommand />
      <KeyboardAnnouncer />
      <Nav />

      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses/:slug" element={<CourseDetail />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
};

export default App;
