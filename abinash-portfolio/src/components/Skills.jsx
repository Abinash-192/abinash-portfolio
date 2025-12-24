import React, { useState, useEffect } from "react";

export default function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState(null);

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

    const element = document.getElementById("skills");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const skillCategories = [
    {
      title: "Frontend",
      icon: "🎨",
      description: "Building responsive and interactive user interfaces",
      color: "from-blue-500 to-cyan-500",
      borderColor: "border-blue-500/30",
      bgGlow: "bg-blue-500/10",
      skills: [
        { name: "HTML5", level: 90 },
        { name: "CSS3", level: 85 },
        { name: "JavaScript (ES6+)", level: 88 },
        { name: "React.js", level: 85 },
        { name: "Tailwind CSS", level: 90 },
      ],
    },
    {
      title: "Backend",
      icon: "⚙️",
      description: "Developing robust server-side applications and APIs",
      color: "from-purple-500 to-pink-500",
      borderColor: "border-purple-500/30",
      bgGlow: "bg-purple-500/10",
      skills: [
        { name: "Java 8+", level: 90 },
        { name: "Spring Boot", level: 88 },
        { name: "Spring Security", level: 82 },
        { name: "REST APIs", level: 90 },
        { name: "Microservices", level: 80 },
        { name: "Spring Data JPA", level: 85 },
        { name: "Node.js", level: 85 },
      ],
    },
    {
      title: "Databases",
      icon: "💾",
      description: "Managing and optimizing data storage solutions",
      color: "from-green-500 to-emerald-500",
      borderColor: "border-green-500/30",
      bgGlow: "bg-green-500/10",
      skills: [
        { name: "MySQL", level: 88 },
        { name: "MongoDB", level: 85 },
      ],
    },
    {
      title: "Tools & DevOps",
      icon: "🛠️",
      description: "Version control, build tools, and deployment",
      color: "from-orange-500 to-red-500",
      borderColor: "border-orange-500/30",
      bgGlow: "bg-orange-500/10",
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "Maven", level: 85 },
        { name: "Postman", level: 88 },
        { name: "Jenkins", level: 75 },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="relative min-h-screen bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 py-20 px-8 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
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
              Skills
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A comprehensive set of technologies I work with to build modern,
            scalable applications
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mt-4" />
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={`group bg-white/5 backdrop-blur-sm border ${
                category.borderColor
              } rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${categoryIndex * 150}ms` }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`relative w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  {category.icon}
                  <div
                    className={`absolute inset-0 ${category.bgGlow} rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {category.title}
                  </h3>
                  <p className="text-xs text-slate-400">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Skills with Progress Bars */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="relative"
                    onMouseEnter={() =>
                      setHoveredSkill(`${categoryIndex}-${skillIndex}`)
                    }
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-slate-300">
                        {skill.name}
                      </span>
                      <span
                        className={`text-xs font-semibold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
                      >
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="relative h-2 bg-white/5 rounded-full overflow-hidden">
                      <div
                        className={`absolute top-0 left-0 h-full bg-gradient-to-r ${
                          category.color
                        } rounded-full transition-all duration-1000 ease-out ${
                          hoveredSkill === `${categoryIndex}-${skillIndex}`
                            ? "shadow-lg"
                            : ""
                        }`}
                        style={{
                          width: isVisible ? `${skill.level}%` : "0%",
                          transitionDelay: `${
                            categoryIndex * 150 + skillIndex * 100
                          }ms`,
                        }}
                      >
                        {/* Animated shimmer effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Skill Count Badge */}
              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-500">Total Skills</span>
                  <span
                    className={`text-2xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
                  >
                    {category.skills.length}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certification Section */}
        <div
          className={`transition-all duration-700 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="relative group bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-purple-500/10 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 hover:border-purple-500/40 transition-all duration-300 overflow-hidden">
            {/* Animated background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-pink-500/10 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative flex items-start gap-6">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-10 h-10 text-white"
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
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <h4 className="text-2xl font-bold text-white">
                    Professional Certification
                  </h4>
                  <span className="px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full text-xs text-green-400 font-semibold">
                    Certified
                  </span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0 animate-pulse" />
                    <div>
                      <div className="text-lg font-semibold text-white">
                        Java Full Stack Programmer
                      </div>
                      <div className="text-sm text-purple-400">
                        Naresh I Technologies
                      </div>
                    </div>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed pl-5">
                    Completed comprehensive training in full-stack development
                    with multiple backend-focused projects, covering Spring
                    Boot, React, REST APIs, and microservices architecture.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack Summary */}
        <div
          className={`mt-12 text-center transition-all duration-700 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex flex-wrap justify-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
            <div className="text-sm text-slate-400">
              <span className="text-white font-semibold">Primary Stack:</span>
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              {[
                "MongoDB",
                "Express",
                "React",
                "Node.js",
                "Java",
                "Spring Boot",
              ].map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-lg text-xs font-medium text-purple-300 hover:scale-110 transition-transform duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </section>
  );
}
