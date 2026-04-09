"use client";

import { Calendar, Code, FileText, Layout, Settings, Rocket } from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";

const timelineData = [
  {
    id: 1,
    title: "Technical Skills",
    date: "Core focus",
    content: "Professional Frontend Developer dedicated to building high-performance, accessible, and visually stunning web applications with modern standards.",
    category: "Role",
    icon: Layout,
    relatedIds: [2, 3],
    status: "completed" as const,
    energy: 100,
  },
  {
    id: 2,
    title: "Web Development",
    date: "Modern Stack",
    content: "Expertise in HTML, CSS, and JavaScript. Specialized in React.js and Next.js for frontend, supported by Node.js and Express.js for full-stack capabilities.",
    category: "Development",
    icon: Code,
    relatedIds: [1, 3],
    status: "completed" as const,
    energy: 95,
  },
  {
    id: 3,
    title: "Database Management",
    date: "Data Layer",
    content: "Proficient in MongoDB for nosql database architecture, ensuring scalable and flexible data storage solutions for modern web apps.",
    category: "Database",
    icon: Settings,
    relatedIds: [2, 4],
    status: "completed" as const,
    energy: 85,
  },
  {
    id: 4,
    title: "Testing & QA",
    date: "Quality Assurance",
    content: "Skilled in Manual Testing, Test Case Writing, and Bug Reporting. Expert in API Testing using Postman to ensure robust and reliable systems.",
    category: "QA",
    icon: Settings,
    relatedIds: [3, 5],
    status: "in-progress" as const,
    energy: 90,
  },
  {
    id: 5,
    title: "Developer Tools",
    date: "Ecosystem",
    content: "Advanced proficiency in Vercel, Git, GitHub, and Render. Specialized in Postman for API documentation and testing workflows.",
    category: "Tools",
    icon: Rocket,
    relatedIds: [4],
    status: "completed" as const,
    energy: 95,
  },
];

const TechnicalExperience = () => {
  return (
    <section id="skills" className="py-20 px-6 container mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold neon-text mb-2">Technical Experience</h2>
        <p className="text-gray-400">Professional tenure at Suh Tech Pvt. Limited</p>
      </div>

      <div className="relative group">
         <RadialOrbitalTimeline timelineData={timelineData} />
      </div>
    </section>
  );
};

export default TechnicalExperience;
