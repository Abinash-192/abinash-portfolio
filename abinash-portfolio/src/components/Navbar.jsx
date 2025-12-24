// export default function Navbar() {
//   return (
//     <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur border-b border-slate-800 z-50">
//       <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
//         <h1 className="font-bold text-xl text-cyan-400">Abinash</h1>

//         <div className="space-x-6 text-sm hidden md:block">
//           <a href="#about" className="hover:text-cyan-400 transition">
//             About
//           </a>
//           <a href="#skills" className="hover:text-cyan-400 transition">
//             Skills
//           </a>
//           <a href="#education" className="hover:text-cyan-400 transition">
//             Education
//           </a>
//           <a href="#projects" className="hover:text-cyan-400 transition">
//             Projects
//           </a>
//           <a href="#contact" className="hover:text-cyan-400 transition">
//             Contact
//           </a>
//         </div>
//       </div>
//     </nav>
//   );
// }

// import React, { useState, useEffect } from "react";

// export default function Navbar() {
//   const [isVisible, setIsVisible] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);

//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navItems = [
//     "Home",
//     "About",
//     "Skills",
//     "Projects",
//     "Education",
//     "Contact",
//   ];

//   return (
//     <nav
//       className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 transition-all duration-500 ${
//         isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
//       } ${
//         scrolled
//           ? "bg-slate-950/80 backdrop-blur-lg shadow-lg shadow-purple-500/10 border-b border-white/5"
//           : "bg-transparent"
//       }`}
//     >
//       <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent cursor-pointer">
//         AM
//       </div>
//       <div className="flex gap-8 text-sm font-medium">
//         {navItems.map((item, i) => (
//           <button
//             key={item}
//             className="text-slate-300 hover:text-white transition-all duration-300 hover:scale-110 relative group cursor-pointer"
//             style={{ animationDelay: `${i * 100}ms` }}
//           >
//             {item}
//             <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300" />
//           </button>
//         ))}
//       </div>
//     </nav>
//   );
// }

import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      // Navbar background effect
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Active section detection
      const sections = [
        "home",
        "about",
        "skills",
        "projects",
        "education",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Education",
    "Contact",
  ];

  const scrollToSection = (item) => {
    const sectionId = item.toLowerCase();

    // Special handling for home/hero section - always scroll to top
    if (sectionId === "home") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return;
    }

    // For other sections, find the element and scroll to it
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Offset for fixed navbar
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
      } ${
        scrolled
          ? "bg-slate-950/80 backdrop-blur-lg shadow-lg shadow-purple-500/10 border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div
        className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent cursor-pointer"
        onClick={() => scrollToSection("Home")}
      >
        AM
      </div>
      <div className="flex gap-8 text-sm font-medium">
        {navItems.map((item, i) => (
          <button
            key={item}
            onClick={() => scrollToSection(item)}
            className={`transition-all duration-300 hover:scale-110 relative group cursor-pointer ${
              activeSection === item.toLowerCase()
                ? "text-white"
                : "text-slate-300 hover:text-white"
            }`}
            style={{ animationDelay: `${i * 100}ms` }}
          >
            {item}
            <span
              className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 ${
                activeSection === item.toLowerCase()
                  ? "w-full"
                  : "w-0 group-hover:w-full"
              }`}
            />
          </button>
        ))}
      </div>
    </nav>
  );
}
