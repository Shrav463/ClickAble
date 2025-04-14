import React from "react";
import { useParams } from "react-router-dom";
import CourseTabs from "./CourseTabs"; // Make sure this exists and is imported correctly
import image1 from "../assets/Google_cybersecurity_theme.jpeg";
import image2 from "../assets/Business_Intelligence.jpeg";
import image3 from "../assets/Advanced_Data_Analytics.jpeg";
import image4 from "../assets/Project_Management.jpeg";

const courseData = {
  "google-cybersecurity": {
    title: "Google Cybersecurity Professional Certificate",
    description:
      "Get on the fast track to a career in cybersecurity. Learn AI and security skills from Google experts. No degree or experience needed.",
    image: image1,
    instructor: "Google Career Certificates",
    startDate: "Starts Apr 11",
    enrolled: "899,763 already enrolled",
    stats: {
      courses: "8 course series",
      rating: "4.8 ★ (41,905 reviews)",
      level: "Beginner level",
      duration: "6 months",
      schedule: "Flexible schedule",
    },
    about: [
      "Understand cybersecurity practices and organizational impact.",
      "Protect systems using SIEM tools and hands-on labs.",
      "Gain practical experience in Python, Linux, and SQL.",
    ],
    skills: ["Network Security", "Python", "SQL", "Linux"],
    outcomes: "Prepare for entry-level roles like security analyst or SOC analyst.",
    courseStructure: "Includes 8 courses: intro, threat mitigation, incident response, and more.",
    testimonials: [
      "This program helped me land my first cybersecurity job!",
      "Hands-on labs were game-changing.",
    ],
  },
  "google-business-intelligence": {
    title: "Google Business Intelligence Certificate",
    description:
      "Master BI tools and techniques to analyze data, create dashboards, and guide business decisions.",
    image: image2,
    instructor: "Google Career Certificates",
    startDate: "Starts Apr 20",
    enrolled: "450,223 already enrolled",
    stats: {
      courses: "6 course series",
      rating: "4.7 ★ (30,000 reviews)",
      level: "Intermediate level",
      duration: "4 months",
      schedule: "Flexible",
    },
    about: [
      "Build dashboards using BigQuery and Looker Studio.",
      "Work with SQL to extract and analyze business data.",
    ],
    skills: ["SQL", "BigQuery", "Looker Studio", "Data Visualization"],
    outcomes: "Apply BI concepts to support strategic decisions.",
    courseStructure: "6 structured modules with real-world business cases.",
    testimonials: [
      "This course gave me confidence using BI tools!",
      "I now lead the data team at my company.",
    ],
  },
  "google-advanced-data-analytics": {
    title: "Google Advanced Data Analytics",
    description:
      "Advance your data career with skills in statistical analysis, machine learning, and big data tools.",
    image: image3,
    instructor: "Google Career Certificates",
    startDate: "Starts May 1",
    enrolled: "320,541 already enrolled",
    stats: {
      courses: "7 course series",
      rating: "4.9 ★ (22,501 reviews)",
      level: "Advanced level",
      duration: "5 months",
      schedule: "Flexible",
    },
    about: [
      "Apply advanced data modeling techniques.",
      "Use Python, R, and BigQuery for statistical analysis.",
      "Interpret complex data sets for decision-making.",
    ],
    skills: ["Python", "R", "BigQuery", "ML models", "Data Wrangling"],
    outcomes: "Pursue roles like data analyst, ML engineer, or data scientist.",
    courseStructure: "Includes 7 courses covering data cleaning, ML, and business applications.",
    testimonials: [
      "Perfect for advancing into a data scientist role.",
      "I built a real machine learning model during the course!",
    ],
  },
  "google-project-management": {
    title: "Google Project Management",
    description:
      "Gain essential project management skills and learn to lead projects using Agile and Scrum.",
    image: image4,
    instructor: "Google Career Certificates",
    startDate: "Starts Apr 25",
    enrolled: "610,901 already enrolled",
    stats: {
      courses: "6 course series",
      rating: "4.8 ★ (38,102 reviews)",
      level: "Beginner level",
      duration: "3 months",
      schedule: "Flexible schedule",
    },
    about: [
      "Develop project documentation and team leadership.",
      "Understand Agile and Scrum methodologies.",
      "Manage real-world projects from start to finish.",
    ],
    skills: ["Agile", "Scrum", "Project Planning", "Team Collaboration"],
    outcomes: "Be prepared for roles like Project Coordinator or Scrum Master.",
    courseStructure: "6 courses covering planning, execution, and delivery.",
    testimonials: [
      "The Agile module was incredibly helpful!",
      "Got promoted after completing this course.",
    ],
  },
};

const CourseDetail = () => {
  const { slug } = useParams();
  const course = courseData[slug];

  if (!course) return <div className="p-6">❌ Course not found</div>;

  return (
    <div className="bg-[#f8f9fa] text-black px-6 sm:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="bg-[#e8f0fe] px-6 py-10 rounded-lg">
          <h1 className="text-4xl font-bold mb-2">{course.title}</h1>
          <p className="max-w-3xl text-gray-800">{course.description}</p>

          <div className="mt-4 flex items-center gap-2">
            <span className="font-medium">Instructor:</span>
            <span className="text-blue-600 underline">{course.instructor}</span>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-6">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 font-semibold">
              Enroll
              <div className="text-xs font-normal">{course.startDate}</div>
            </button>
            <p className="text-sm text-gray-800">{course.enrolled}</p>
          </div>
        </div>

        {/* Course Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 text-center bg-white px-6 py-6 border-t border-gray-200 shadow-sm mt-6 rounded-md">
          <div>
            <p className="font-bold text-blue-900">{course.stats.courses}</p>
            <p className="text-xs text-gray-600">Earn a credential</p>
          </div>
          <div>
            <p className="font-bold text-blue-900">{course.stats.rating}</p>
            <p className="text-xs text-gray-600">Course rating</p>
          </div>
          <div>
            <p className="font-bold text-blue-900">{course.stats.level}</p>
            <p className="text-xs text-gray-600">No experience required</p>
          </div>
          <div>
            <p className="font-bold text-blue-900">{course.stats.duration}</p>
            <p className="text-xs text-gray-600">{course.stats.schedule}</p>
          </div>
        </div>

        {/* Tab Section */}
        <div className="py-8">
          <CourseTabs course={course} />
        </div>

        {/* Skills Section */}
        <div className="pb-10">
          <h3 className="font-semibold text-lg mb-2">Skills you'll gain</h3>
          <div className="flex flex-wrap gap-2">
            {course.skills.map((skill, idx) => (
              <span
                key={idx}
                className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
