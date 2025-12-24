// import { motion } from "framer-motion";
// import groceryImg from "../assets/projects/grocery.png";
// import urlShortenerImg from "../assets/projects/urlshortner.png"
// import aiAssistantImg from "../assets/projects/aiassistant.png";

// const projects = [
//   {
//     title: "Grocery Delivery App",
//     desc: "Full-stack grocery delivery platform with authentication & REST APIs",
//     img: groceryImg,
//   },
//   {
//     title: "URL Shortener",
//     desc: "Convert long URLs into short, shareable links",
//     img: urlShortenerImg,
//   },
//   {
//     title: "AI Virtual Assistant",
//     desc: "MERN-based AI assistant with NLP & voice support",
//     img: aiAssistantImg,
//   },
// ];

// export default function Projects() {
//   return (
//     <section id="projects" className="py-20 px-6">
//       <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>

//       <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//         {projects.map((p, i) => (
//           <motion.div
//             key={i}
//             whileHover={{ scale: 1.05 }}
//             className="bg-slate-900 rounded-xl overflow-hidden border border-slate-800"
//           >
//             <img src={p.img} alt={p.title} />
//             <div className="p-5">
//               <h3 className="text-xl font-semibold">{p.title}</h3>
//               <p className="text-slate-400 text-sm mt-2">{p.desc}</p>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }

import React, { useState, useEffect } from "react";

export default function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeProject, setActiveProject] = useState(0);

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

    const element = document.getElementById("projects");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const projects = [
    {
      title: "Full Stack Grocery Delivery Application",
      status: "Ongoing",
      description:
        "A full-stack food delivery platform with secure authentication, role-based access, and RESTful backend services. Designed to handle real-world ordering, user management, and scalable APIs.",
      technologies: ["React", "Node.js", "MongoDB", "Express.js"],
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
      liveDemo: null,
      github: null,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "URL Shortener",
      status: "Completed",
      description:
        "A full-stack web application that converts long, complex URLs into short, easy-to-share links while maintaining fast redirection and reliable storage. Built with React.js frontend and Node.js with Express.js backend.",
      technologies: ["React", "Node.js", "Express.js"],
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      liveDemo: "https://url-shortner-ten-xi.vercel.app/",
      github: "https://github.com/Abinash-192/URL-SHORTNER",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "AI Virtual Assistant",
      status: "Completed",
      description:
        "An intelligent web-based application built with the MERN stack that allows users to interact through text or voice commands. Integrates AI and NLP capabilities using OpenAI/Gemini APIs to understand queries and generate intelligent responses.",
      technologies: ["MongoDB", "Express", "React", "Node.js", "AI API"],
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
      liveDemo: "https://silly-cheesecake-40b237.netlify.app",
      github: "https://github.com/Abinash-192/VIRTUAL-AI-ASSISTANT",
      color: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <section
      id="projects"
      className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-20 px-8 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-5xl font-bold mb-4">
            <span className="text-white">My </span>
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Real-world applications showcasing my full-stack development skills
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mt-4" />
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent" />

                {/* Status Badge */}
                <div
                  className={`absolute top-4 right-4 px-3 py-1 bg-gradient-to-r ${project.color} rounded-full text-xs font-semibold text-white shadow-lg`}
                >
                  {project.status}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                  {project.title}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r ${project.color} rounded-lg text-sm font-medium text-white hover:scale-105 transition-all duration-300 hover:shadow-lg`}
                    >
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
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                      Live Demo
                    </a>
                  )}
                  {!project.liveDemo && (
                    <div className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm font-medium text-slate-500 cursor-not-allowed">
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
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        />
                      </svg>
                      In Progress
                    </div>
                  )}
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-10 h-10 bg-white/5 border border-white/10 rounded-lg text-slate-300 hover:bg-white/10 hover:text-white hover:scale-105 transition-all duration-300"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  ) : (
                    <div className="flex items-center justify-center w-10 h-10 bg-white/5 border border-white/10 rounded-lg text-slate-500 cursor-not-allowed">
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div
          className={`mt-16 text-center transition-all duration-700 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-slate-400 mb-6">Want to see more of my work?</p>
          <a
            href="https://github.com/Abinash-192"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-white hover:bg-white/10 hover:border-white/20 hover:scale-105 transition-all duration-300 group"
          >
            <svg
              className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"
                clipRule="evenodd"
              />
            </svg>
            <span className="font-medium">View All Projects on GitHub</span>
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
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
    </section>
  );
}
