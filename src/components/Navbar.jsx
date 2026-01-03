import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const links = [
  "home",
  "about",
  "skills",
  "experience",
  "projects",
  "achievements",
  "certifications",
  "contact",
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0.1,
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-bg/80 border-b border-white/5 px-6 md:px-20 py-5 flex justify-between items-center">
      <h1 className="text-lg font-bold tracking-wide">Surya Teja</h1>

      <div className="md:hidden cursor-pointer" onClick={() => setOpen(!open)}>
        {open ? <FaTimes size={26} /> : <FaBars size={26} />}
      </div>

      <nav className="hidden md:block">
        {links.map((link) => (
          <a
            key={link}
            href={`#${link}`}
            onClick={() => setOpen(false)}
            className={`mx-4 text-lg font-semibold transition
              ${
                active === link
                  ? "text-primary border-b-2 border-primary"
                  : "text-muted hover:text-primary"
              }
            `}
          >
            {link.toUpperCase()}
          </a>
        ))}
      </nav>
    </header>
  );
}
