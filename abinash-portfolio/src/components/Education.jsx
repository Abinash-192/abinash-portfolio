// import { motion } from "framer-motion";

// export default function Education() {
//   return (
//     <section
//       id="education"
//       className="py-20 max-w-5xl mx-auto px-6 scroll-mt-24"
//     >
//       <motion.h2
//         className="text-3xl font-bold mb-6"
//         initial={{ opacity: 0, x: -40 }}
//         whileInView={{ opacity: 1, x: 0 }}
//       >
//         Education
//       </motion.h2>

//       <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
//         <h3 className="text-xl font-semibold">
//           B.Tech in Computer Science Engineering
//         </h3>
//         <p className="text-slate-400 mt-2">
//           Biju Patnaik University of Technology, Rourkela, Odisha
//         </p>
//         <p className="text-slate-500 text-sm mt-1">Graduated: 2023</p>
//       </div>
//     </section>
//   );
// }

import React, { useState, useEffect } from "react";

export default function EducationSection() {
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

    const element = document.getElementById("education");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section
      id="education"
      className="relative min-h-screen bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 py-20 px-8 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-5xl font-bold mb-4">
            <span className="text-white">My </span>
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Academic background and professional training
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mt-4" />
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 via-pink-500 to-purple-500 hidden lg:block" />

          {/* Education Items */}
          <div className="space-y-12">
            {/* Formal Education */}
            <div
              className={`relative transition-all duration-700 delay-100 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-8"
              }`}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
                {/* Left Side - Content */}
                <div className="lg:text-right mb-8 lg:mb-0">
                  <div className="inline-block lg:inline text-left lg:text-right">
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300 hover:scale-105">
                      {/* Icon */}
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 mx-auto lg:mx-0 lg:ml-auto shadow-lg">
                        <svg
                          className="w-8 h-8 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 14l9-5-9-5-9 5 9 5z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                          />
                        </svg>
                      </div>

                      {/* Year Badge */}
                      <div className="inline-block px-4 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-sm text-blue-300 font-medium mb-4">
                        2019 - 2023
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-2">
                        Bachelor of Technology
                      </h3>
                      <p className="text-purple-400 font-medium mb-4">
                        Computer Science Engineering
                      </p>
                      <p className="text-slate-400 mb-4">
                        Biju Patnaik University of Technology
                      </p>
                      <p className="text-sm text-slate-500 mb-4">
                        Rourkela, Odisha
                      </p>

                      {/* Achievement */}
                      <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                        <div className="flex items-start gap-3">
                          <svg
                            className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <div className="flex-1">
                            <p className="text-sm text-slate-300 font-medium">
                              Key Achievement
                            </p>
                            <p className="text-xs text-slate-400 mt-1">
                              Developed an MVC project using JDBC, Servlet, JSP
                              and HTML, CSS
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Center Dot */}
                <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full border-4 border-slate-900 shadow-lg z-10" />

                {/* Right Side - Empty for alternating layout */}
                <div />
              </div>
            </div>

            {/* Professional Training */}
            <div
              className={`relative transition-all duration-700 delay-300 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-8"
              }`}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
                {/* Left Side - Empty for alternating layout */}
                <div className="hidden lg:block" />

                {/* Center Dot */}
                <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full border-4 border-slate-900 shadow-lg z-10" />

                {/* Right Side - Content */}
                <div>
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300 hover:scale-105">
                    {/* Icon */}
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                        />
                      </svg>
                    </div>

                    {/* Status Badge */}
                    <div className="inline-block px-4 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-sm text-purple-300 font-medium mb-4">
                      Professional Training
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-2">
                      Java Full Stack Training Program
                    </h3>
                    <p className="text-purple-400 font-medium mb-4">
                      Full Stack Development
                    </p>
                    <p className="text-slate-400 mb-6">Naresh I Technologies</p>

                    {/* Key Learnings */}
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                        <p className="text-sm text-slate-300">
                          Comprehensive training in Java, Spring Boot, and React
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0" />
                        <p className="text-sm text-slate-300">
                          Completed multiple full-stack and backend-focused
                          projects
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                        <p className="text-sm text-slate-300">
                          Hands-on experience with REST APIs and microservices
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Summary */}
        <div
          className={`mt-16 transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 text-center">
            <h4 className="text-2xl font-bold text-white mb-4">
              Continuous Learning Journey
            </h4>
            <p className="text-slate-400 max-w-3xl mx-auto leading-relaxed">
              My education has provided me with a strong foundation in computer
              science fundamentals and software development. Through academic
              projects and professional training, I've gained practical
              experience in building real-world applications and continue to
              expand my skills through hands-on development and staying updated
              with the latest technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
