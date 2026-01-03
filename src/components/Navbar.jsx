import { useState } from "react";
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

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-bg/80 border-b border-white/5 px-6 md:px-20 py-5 flex justify-between items-center">
      <h1 className="text-lg font-bold tracking-wide">Surya Teja</h1>

      <div className="md:hidden cursor-pointer" onClick={() => setOpen(!open)}>
        {open ? <FaTimes size={26} /> : <FaBars size={26} />}
      </div>

      <nav
        className="block md:inline mx-4 my-2 md:my-0 text-sm tracking-wide font-semibold uppercase text-muted hover:text-primary transition"
      >
        {links.map((link) => (
          <a
            key={link}
            href={`#${link}`}
            className="block md:inline mx-4 my-2 md:my-0 text-lg font-semibold hover:text-primary"
            onClick={() => setOpen(false)}
          >
            {link.toUpperCase()}
          </a>
        ))}
      </nav>
    </header>
  );
}
