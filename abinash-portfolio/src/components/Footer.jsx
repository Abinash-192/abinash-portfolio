// export default function Footer() {
//   return (
//     <footer className="py-6 text-center text-slate-500 text-sm">
//       © {new Date().getFullYear()} Abinash Mallick. All rights reserved.
//     </footer>
//   );
// }

import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { MdKeyboardArrowUp } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Footer Navigation (Same as Navbar) */}
        <div className="flex flex-wrap gap-6 text-sm text-slate-300 justify-center md:justify-start">
          <a href="#home" className="hover:text-cyan-400 transition">
            Home
          </a>
          <a href="#about" className="hover:text-cyan-400 transition">
            About
          </a>
          <a href="#skills" className="hover:text-cyan-400 transition">
            Skills
          </a>
          <a href="#education" className="hover:text-cyan-400 transition">
            Education
          </a>
          <a href="#projects" className="hover:text-cyan-400 transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-cyan-400 transition">
            Contact
          </a>
        </div>

        {/* Right: Social Icons */}
        <div className="flex gap-5 text-xl text-slate-300">
          <a
            href="https://www.linkedin.com/in/abinash-mallick192/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/Abinash-192"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://x.com/Thisisabhioffi1"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>

          <a
            href="https://www.instagram.com/_ab._.here_/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-slate-800 py-4 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} Portfolio. All rights reserved.
      </div>

      {/* Scroll to Top Button */}
      <a
        href="#home"
        className="fixed bottom-6 right-6 bg-cyan-500 hover:bg-cyan-600 text-black p-3 rounded-full shadow-lg transition"
        aria-label="Scroll to top"
      >
        <MdKeyboardArrowUp size={24} />
      </a>
    </footer>
  );
}
