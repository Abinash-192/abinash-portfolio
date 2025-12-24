// import { motion } from "framer-motion";

// export default function Hero() {
//   return (
//     <section className="h-screen flex items-center justify-center text-center px-6">
//       <motion.div
//         initial={{ opacity: 0, y: 60 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         <h1 className="text-5xl md:text-6xl font-bold">
//           Hi, I'm <span className="text-cyan-400">Abinash Mallick</span>
//         </h1>

//         <p className="mt-4 text-lg text-slate-400">
//           Java Full Stack Developer | Spring Boot | React
//         </p>

//         <a
//           href="#projects"
//           className="inline-block mt-8 px-6 py-3 bg-cyan-400 text-black rounded-lg font-semibold hover:scale-105 transition"
//         >
//           View Projects
//         </a>
//       </motion.div>
//     </section>
//   );
// }

// import React, { useState, useEffect } from "react";
// import profileImg from "../assets/profile.png";

// export default function HeroSection() {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [isVisible, setIsVisible] = useState(false);
//   const [isDownloading, setIsDownloading] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);

//     const handleMouseMove = (e) => {
//       setMousePosition({
//         x: (e.clientX / window.innerWidth - 0.5) * 20,
//         y: (e.clientY / window.innerHeight - 0.5) * 20,
//       });
//     };

//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   const skills = ["Spring Boot", "REST APIs", "React", "Java", "SQL"];

//   const handleDownloadResume = () => {
//     setIsDownloading(true);

//     // Create resume content
//     const resumeContent = `
// ABINASH MALLICK
// Java Full Stack Developer (Fresher)
// Email: abinash.mallick@example.com | Phone: +91-XXXXXXXXXX
// LinkedIn: linkedin.com/in/abinashmallick | GitHub: github.com/abinashmallick

// PROFESSIONAL SUMMARY
// Recent graduate and aspiring Java Full Stack Developer with strong foundation in building web applications using Spring Boot, REST APIs, and React. Passionate about clean backend design and eager to contribute to real-world projects.

// TECHNICAL SKILLS
// • Backend: Java, Spring Boot, REST APIs, Microservices
// • Frontend: React, JavaScript, HTML5, CSS3
// • Database: SQL, MySQL, PostgreSQL
// • Tools: Git, Docker, Maven
// • Methodologies: Agile, Object-Oriented Programming

// EDUCATION
// [Degree] in Computer Science
// [University Name] | [Year]
// CGPA: [X.XX/10.0]

// PROJECTS
// • E-commerce Platform: Built full-stack application with Spring Boot backend and React frontend
//   - Implemented user authentication and product management features
//   - Designed RESTful APIs for seamless data flow

// • Task Management System: Developed REST APIs and integrated with React UI
//   - Created CRUD operations for task management
//   - Implemented responsive UI with modern design principles

// • Personal Portfolio Website: Designed and developed portfolio using React
//   - Showcased projects and skills with interactive UI elements
//   - Deployed using modern CI/CD practices

// CERTIFICATIONS
// • [Relevant Certification] - [Platform]
// • [Relevant Certification] - [Platform]

// INTERESTS
// • Open Source Contribution
// • Learning New Technologies
// • Problem Solving and Competitive Programming
//     `;

//     // Create blob and download
//     const blob = new Blob([resumeContent], { type: "text/plain" });
//     const url = window.URL.createObjectURL(blob);
//     const link = document.createElement("a");
//     link.href = url;
//     link.download = "Abinash_Mallick_Resume.txt";
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//     window.URL.revokeObjectURL(url);

//     setTimeout(() => setIsDownloading(false), 2000);
//   };

//   return (
//     <div className="relative min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 overflow-hidden">
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div
//           className="absolute top-20 left-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"
//           style={{
//             transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
//             transition: "transform 0.3s ease-out",
//           }}
//         />
//         <div
//           className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"
//           style={{
//             transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
//             transition: "transform 0.3s ease-out",
//             animationDelay: "1s",
//           }}
//         />

//         {/* Floating Grid */}
//         <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.05)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
//       </div>

//       {/* Main Content */}
//       <div className="relative z-10 flex items-center justify-between px-16 py-20 max-w-7xl mx-auto">
//         {/* Left Content */}
//         <div className="flex-1 space-y-8">
//           {/* Greeting Badge */}
//           <div
//             className={`inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full transition-all duration-700 delay-100 ${
//               isVisible
//                 ? "opacity-100 translate-x-0"
//                 : "opacity-0 -translate-x-8"
//             }`}
//           >
//             <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
//             <span className="text-sm text-slate-300">
//               Open to opportunities
//             </span>
//           </div>

//           {/* Main Heading */}
//           <div
//             className={`transition-all duration-700 delay-200 ${
//               isVisible
//                 ? "opacity-100 translate-x-0"
//                 : "opacity-0 -translate-x-8"
//             }`}
//           >
//             <h1 className="text-6xl font-bold mb-4">
//               <span className="text-white">Hi, I'm </span>
//               <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradient_3s_linear_infinite]">
//                 Abinash Mallick
//               </span>
//             </h1>
//             <h2 className="text-3xl font-semibold text-indigo-400">
//               Java Full Stack Developer
//             </h2>
//           </div>

//           {/* Description */}
//           <p
//             className={`text-slate-400 text-lg max-w-xl leading-relaxed transition-all duration-700 delay-300 ${
//               isVisible
//                 ? "opacity-100 translate-x-0"
//                 : "opacity-0 -translate-x-8"
//             }`}
//           >
//             Passionate about building scalable web applications using Spring
//             Boot, REST APIs, and React. Eager to apply my skills in clean
//             backend design and solve real-world problems as I begin my
//             development journey.
//           </p>

//           {/* Skills Tags */}
//           <div
//             className={`flex flex-wrap gap-3 transition-all duration-700 delay-400 ${
//               isVisible
//                 ? "opacity-100 translate-x-0"
//                 : "opacity-0 -translate-x-8"
//             }`}
//           >
//             {skills.map((skill, i) => (
//               <span
//                 key={skill}
//                 className="px-4 py-2 bg-white/5 backdrop-blur-sm border border-purple-500/30 rounded-lg text-sm text-purple-300 hover:bg-white/10 hover:border-purple-400/50 hover:scale-105 transition-all duration-300 cursor-default"
//                 style={{ animationDelay: `${i * 100}ms` }}
//               >
//                 {skill}
//               </span>
//             ))}
//           </div>

//           {/* CTA Buttons */}
//           <div
//             className={`flex gap-4 transition-all duration-700 delay-500 ${
//               isVisible
//                 ? "opacity-100 translate-x-0"
//                 : "opacity-0 -translate-x-8"
//             }`}
//           >
//             <button className="group relative px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-medium text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]">
//               <span className="relative z-10">View My Work</span>
//               <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//             </button>

//             <button className="px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg font-medium text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
//               Get In Touch
//             </button>

//             <button
//               className="px-6 py-3 bg-transparent border border-pink-500/50 rounded-lg font-medium text-pink-400 hover:bg-pink-500/10 hover:border-pink-400 transition-all duration-300 hover:scale-105 flex items-center gap-2"
//               onClick={handleDownloadResume}
//               disabled={isDownloading}
//             >
//               {isDownloading ? (
//                 <>
//                   <svg
//                     className="w-4 h-4 animate-spin"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
//                     />
//                   </svg>
//                   Downloading...
//                 </>
//               ) : (
//                 <>
//                   <svg
//                     className="w-4 h-4"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
//                     />
//                   </svg>
//                   Resume
//                 </>
//               )}
//             </button>
//           </div>

//           {/* Social Links */}
//           <div
//             className={`flex gap-4 transition-all duration-700 delay-600 ${
//               isVisible
//                 ? "opacity-100 translate-x-0"
//                 : "opacity-0 -translate-x-8"
//             }`}
//           >
//             {["github", "linkedin", "twitter"].map((social) => (
//               <button
//                 key={social}
//                 className="w-12 h-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 hover:border-white/20 hover:scale-110 transition-all duration-300"
//               >
//                 <span className="text-xs uppercase">{social[0]}</span>
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Right Content - Profile Image */}
//         <div
//           className={`flex-shrink-0 transition-all duration-1000 delay-300 ${
//             isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
//           }`}
//         >
//           <div className="relative">
//             {/* Gradient Border Container */}
//             <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-pink-500 to-purple-500 rounded-3xl blur-xl opacity-60 animate-pulse" />

//             {/* Image Container */}
//             <div className="relative w-96 h-96 bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-500">
//               <img
//                 src={profileImg}
//                 alt="Abinash Mallick"
//                 className="w-full h-full object-cover"
//               />

//               {/* Overlay Effect */}
//               <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

//               {/* Floating Badge */}
//               <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <div className="text-white font-semibold">Fresher</div>
//                     <div className="text-slate-300 text-sm">Ready to Start</div>
//                   </div>
//                   <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
//                     <svg
//                       className="w-6 h-6 text-white"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M13 10V3L4 14h7v7l9-11h-7z"
//                       />
//                     </svg>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Decorative Elements */}
//             <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-500/30 rounded-full blur-2xl animate-pulse" />
//             <div
//               className="absolute -bottom-4 -left-4 w-24 h-24 bg-pink-500/30 rounded-full blur-2xl animate-pulse"
//               style={{ animationDelay: "1s" }}
//             />
//           </div>
//         </div>
//       </div>

//       {/* Scroll Indicator */}
//       <div
//         className={`absolute bottom-10 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-700 ${
//           isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
//         }`}
//       >
//         <div className="flex flex-col items-center gap-2 text-slate-400 animate-bounce">
//           <span className="text-xs uppercase tracking-wider">Scroll Down</span>
//           <svg
//             className="w-6 h-6"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M19 14l-7 7m0 0l-7-7m7 7V3"
//             />
//           </svg>
//         </div>
//       </div>

//       <style>{`
//         @keyframes gradient {
//           0% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//           100% { background-position: 0% 50%; }
//         }
//       `}</style>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import profileImg from "../assets/profile.png";
export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [typewriterText, setTypewriterText] = useState("");
  const [typewriterIndex, setTypewriterIndex] = useState(0);

  const roles = ["Java Full Stack Developer", "MERN Stack Developer"];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Typewriter effect
  useEffect(() => {
    const currentRole = roles[currentRoleIndex];

    if (typewriterIndex < currentRole.length) {
      const timeout = setTimeout(() => {
        setTypewriterText(currentRole.slice(0, typewriterIndex + 1));
        setTypewriterIndex(typewriterIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setTypewriterIndex(0);
        setTypewriterText("");
        setCurrentRoleIndex((currentRoleIndex + 1) % roles.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [typewriterIndex, currentRoleIndex]);

  const skills = ["Spring Boot", "REST APIs", "React", "Java", "SQL"];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  const handleDownloadResume = () => {
    setIsDownloading(true);

    // Create resume content
    const resumeContent = `ABINASH MALLICK
Bhadrak, Odisha | +91 8018449447 | mallickabinash192@gmail.com
https://www.linkedin.com/in/abinash-mallick192/

OBJECTIVE:
Enthusiastic and detail-oriented Computer Science graduate with a strong foundation in Java Full Stack Development.
Passionate about learning new technologies and applying problem-solving skills to develop efficient software solutions.
Looking for an opportunity to contribute to a dynamic development team.

TECHNICAL STACKS:
● OPERATING SYSTEMS & CLOUD TECHNOLOGIES: WINDOWS 10/11
● PROGRAMMING LANGUAGES & LIBRARIES: Core Java (OOPS, Exception Handling, Multithreading, Collections, Java 8)
● Frontend: HTML, CSS, JAVASCRIPT, REACT, BOOTSTRAP, TAILWIND.CSS, Redux, Rest-Api
● Backend: JDBC, SERVLET, JSP, SPRING FRAMEWORK (Spring Boot, Spring MVC, Spring Data JPA, Spring Security)
● Full Stack: MERN (MongoDB, Express, React, Node)
● Database: MYSQL, MONGODB
● CI/CD & DEVOPS TOOLS: JENKINS, DOCKER, GIT, POSTMAN
● IDE: Eclipse, VS Code, IntelliJ

EDUCATION:
GRADUATION | 2023 (74%)
Bachelor of Engineering of Technology | Satya Sai Engineering College | Balasore

INTERMEDIATE | 2019 (54%)
Science | Satya Sai Residential College | Balesore

SCHOOL | 2017 (75%)
Bonth Boys High School | Bhadrak

PROJECT #1:
PROJECT NAME: AI Virtual Assistant
TECHNOLOGY: MERN (MongoDB, Express, React, Node)
Link: https://silly-cheesecake-40b237.netlify.app

PROJECT OVERVIEW:
The AI Virtual Assistant is an intelligent web-based application developed using the MERN stack. It allows users to interact
with the system through text or voice commands to perform various tasks such as answering questions, managing to-do lists,
fetching live information (like weather or news), and assisting with daily productivity tasks. This project integrates Artificial
Intelligence and Natural Language Processing (NLP) capabilities using AI APIs (like OpenAI or Gemini) to understand user
queries and generate intelligent, human-like responses.

Key Features:
● Answer questions
● Manage to-do lists and reminders
● Fetch weather updates, news, or general info
● Open websites or applications

PROJECT #2:
NAME: URL Shortener
TECHNOLOGY: React, Node.js
LINK: https://url-shortner-ten-xi.vercel.app/

PROJECT OVERVIEW:
The URL Shortener Application is a full-stack web application developed using React.js for the frontend and Node.js with
Express.js for the backend. The primary purpose of this project is to convert long, complex URLs into short, easy-to-share
links while maintaining fast redirection and reliable storage. The backend exposes endpoints to create short URLs, retrieve
existing URLs, and perform redirections.

Objectives:
● To design and develop a full-stack URL shortener using React and Node.js
● To implement RESTful APIs for URL creation, retrieval, and redirection
● To generate unique and optional custom short codes for long URLs
● To ensure fast and reliable redirection from short URLs to original URLs
● To handle CORS and cross-origin communication between frontend and backend
● To deploy the frontend on Vercel and the backend on Render

PROJECT #3:
NAME: E-Commerce Shopping Cart
TECHNOLOGY: HTML, CSS, JavaScript, Java, SQL

PROJECT OVERVIEW:
The E-Commerce Shopping Cart System is a web-based application designed to provide users with a seamless online shopping
experience. It enables customers to browse products, add items to their cart, manage quantities, and place orders efficiently.
The frontend provides an intuitive and responsive user interface, while the backend handles business logic, data processing,
and communication with the SQL database for product and order management.

Objectives:
● To develop a dynamic web application for online shopping
● To implement CRUD operations for product and order management
● To provide a secure and efficient shopping experience for users
● To manage products, users, and orders through an SQL database
● To implement a shopping cart mechanism for order tracking and updates
    `;

    // Create blob and download
    const blob = new Blob([resumeContent], { type: "text/plain" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Abinash_Mallick_Resume.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);

    setTimeout(() => setIsDownloading(false), 2000);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-20 left-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            transition: "transform 0.3s ease-out",
          }}
        />
        <div
          className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
            transition: "transform 0.3s ease-out",
            animationDelay: "1s",
          }}
        />

        {/* Floating Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.05)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-between px-16 py-20 max-w-7xl mx-auto">
        {/* Left Content */}
        <div className="flex-1 space-y-8">
          {/* Greeting Badge */}
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full transition-all duration-700 delay-100 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm text-slate-300">
              Open to opportunities
            </span>
          </div>

          {/* Main Heading */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            <h1 className="text-6xl font-bold mb-4">
              <span className="text-white">Hi, I'm </span>
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradient_3s_linear_infinite]">
                Abinash Mallick
              </span>
            </h1>
            <h2 className="text-3xl font-semibold text-indigo-400 min-h-[2.5rem]">
              {typewriterText}
              <span className="animate-pulse">|</span>
            </h2>
          </div>

          {/* Description */}
          <p
            className={`text-slate-400 text-lg max-w-xl leading-relaxed transition-all duration-700 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            Passionate about building scalable web applications using Spring
            Boot, REST APIs, and React. Eager to apply my skills in clean
            backend design and solve real-world problems as I begin my
            development journey.
          </p>

          {/* Skills Tags */}
          <div
            className={`flex flex-wrap gap-3 transition-all duration-700 delay-400 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            {skills.map((skill, i) => (
              <span
                key={skill}
                className="px-4 py-2 bg-white/5 backdrop-blur-sm border border-purple-500/30 rounded-lg text-sm text-purple-300 hover:bg-white/10 hover:border-purple-400/50 hover:scale-105 transition-all duration-300 cursor-default"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {skill}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div
            className={`flex gap-4 transition-all duration-700 delay-500 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            <button
              onClick={() => scrollToSection("projects")}
              className="group relative px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-medium text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] cursor-pointer"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg font-medium text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              Get In Touch
            </button>

            <button
              className="px-6 py-3 bg-transparent border border-pink-500/50 rounded-lg font-medium text-pink-400 hover:bg-pink-500/10 hover:border-pink-400 transition-all duration-300 hover:scale-105 flex items-center gap-2 cursor-pointer"
              onClick={handleDownloadResume}
              disabled={isDownloading}
            >
              {isDownloading ? (
                <>
                  <svg
                    className="w-4 h-4 animate-spin"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                  Downloading...
                </>
              ) : (
                <>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Resume
                </>
              )}
            </button>
          </div>

          {/* Social Links */}
          <div
            className={`flex gap-4 transition-all duration-700 delay-600 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            <a
              href="https://github.com/Abinash-192"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 hover:border-white/20 hover:scale-110 transition-all duration-300 cursor-pointer"
              title="GitHub"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/abinash-mallick192/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 hover:border-white/20 hover:scale-110 transition-all duration-300 cursor-pointer"
              title="LinkedIn"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="https://x.com/Thisisabhioffi1"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 hover:border-white/20 hover:scale-110 transition-all duration-300 cursor-pointer"
              title="Twitter"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right Content - Profile Image */}
        <div
          className={`flex-shrink-0 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
          }`}
        >
          <div className="relative">
            {/* Gradient Border Container */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-pink-500 to-purple-500 rounded-3xl blur-xl opacity-60 animate-pulse" />

            {/* Image Container */}
            <div className="relative w-96 h-96 bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-500">
              <img
                src={profileImg}
                alt="Profile"
                className="w-full h-full object-cover"
              />

              {/* Overlay Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-white font-semibold">Fresher</div>
                    <div className="text-slate-300 text-sm">Ready to Start</div>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-500/30 rounded-full blur-2xl animate-pulse" />
            <div
              className="absolute -bottom-4 -left-4 w-24 h-24 bg-pink-500/30 rounded-full blur-2xl animate-pulse"
              style={{ animationDelay: "1s" }}
            />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
}
