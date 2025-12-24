// import { motion } from "framer-motion";

// export default function About() {
//   return (
//     <section id="about" className="py-20 max-w-5xl mx-auto px-6 scroll-mt-24">
//       <motion.h2
//         className="text-3xl font-bold mb-6"
//         initial={{ opacity: 0, x: -50 }}
//         whileInView={{ opacity: 1, x: 0 }}
//       >
//         About Me
//       </motion.h2>

//       <p className="text-slate-400 leading-relaxed">
//         I am a Java Full Stack Developer with strong hands-on experience in
//         building backend-heavy applications using Spring Boot, REST APIs, and
//         Spring Security, along with modern frontend development using React.
//       </p>
//     </section>
//   );
// }

import React, { useState, useEffect } from "react";
import profile2 from "../assets/profile2.png";
export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("about");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const stats = [
    { label: "Projects Completed", value: "3+" },
    { label: "Technologies", value: "15+" },
    { label: "Experience", value: "Fresher" },
    { label: "Certifications", value: "1" },
  ];

  const highlights = [
    {
      icon: "🎯",
      title: "Backend Focused",
      description:
        "Specializing in Spring Boot, REST APIs, and microservices architecture",
    },
    {
      icon: "💻",
      title: "Full Stack Skills",
      description:
        "Proficient in both frontend (React) and backend (Java, Node.js) development",
    },
    {
      icon: "🚀",
      title: "Real-world Projects",
      description:
        "Building production-ready applications with scalable architecture",
    },
    {
      icon: "📚",
      title: "Continuous Learning",
      description:
        "Always improving through hands-on development and code reviews",
    },
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-20 px-8 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-5xl font-bold mb-4">
            <span className="text-white">About </span>
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left - Image */}
          {/* Left - Image */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-2xl opacity-30" />
              <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-white/10 bg-gradient-to-br from-slate-800/50 to-slate-900/50">
                <img
                  src={profile2}
                  alt="profile"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
          {/* Right - Content */}
          <div
            className={`space-y-6 transition-all duration-700 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          >
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-white">
                I'm Abinash Mallick
              </h3>
              <p className="text-lg text-purple-400 font-medium">
                Java Full Stack Developer
              </p>
            </div>

            <p className="text-slate-400 leading-relaxed">
              I am a Java Full Stack Developer with strong hands-on experience
              in building backend-heavy applications using{" "}
              <span className="text-purple-400 font-medium">
                Spring Boot, REST APIs, and Spring Security
              </span>
              , along with modern frontend development using{" "}
              <span className="text-pink-400 font-medium">React</span>. I enjoy
              converting real-world requirements into clean, scalable, and
              maintainable code.
            </p>

            <p className="text-slate-400 leading-relaxed">
              Currently, I am working on a{" "}
              <span className="text-white font-medium">
                Full Stack Grocery Delivery Application
              </span>{" "}
              using the MERN stack, focusing on backend architecture, API
              design, authentication, and database optimization. My goal is to
              grow as a backend-focused full stack developer and contribute to
              production-ready systems.
            </p>

            {/* Quick Info */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-purple-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-slate-500">Email</div>
                  <div className="text-sm text-slate-300">
                    mallickabinash192@gmail.com
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-pink-500/20 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-pink-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-slate-500">Location</div>
                  <div className="text-sm text-slate-300">Hyderabad, India</div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <a
                href="https://www.linkedin.com/in/abinash-mallick192/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-medium text-white hover:scale-105 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]"
              >
                Connect with me
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 transition-all duration-700 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300 hover:scale-105"
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Highlights Grid */}
        <div
          className={`grid md:grid-cols-2 gap-6 transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300 group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">
                {item.title}
              </h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
