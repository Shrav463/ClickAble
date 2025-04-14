import React, { useState } from "react";

const CourseTabs = ({ course }) => {
  const [activeTab, setActiveTab] = useState("About");

  const tabs = ["About", "Outcomes", "Courses", "Testimonials"];

  const renderTabContent = () => {
    switch (activeTab) {
      case "About":
        return (
          <div>
            <h3 className="font-bold text-xl mb-2">What you'll learn</h3>
            <ul className="list-disc ml-6 space-y-2">
              {course.about.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        );
      case "Outcomes":
        return <p className="text-gray-700">{course.outcomes}</p>;
      case "Courses":
        return <p className="text-gray-700">{course.courseStructure}</p>;
      case "Testimonials":
        return (
          <ul className="list-disc ml-6 space-y-2">
            {course.testimonials.map((t, idx) => (
              <li key={idx}>{t}</li>
            ))}
          </ul>
        );
      default:
        return null;
    }
  };

  return (
    <div className="mt-6">
      <div className="flex space-x-4 border-b pb-2 mb-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 text-sm font-medium rounded-t focus:outline-none ${
              activeTab === tab
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-600 hover:text-blue-500"
            }`}
            onClick={() => setActiveTab(tab)}
            aria-pressed={activeTab === tab}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="bg-gray-50 p-4 rounded shadow">{renderTabContent()}</div>
    </div>
  );
};

export default CourseTabs;
