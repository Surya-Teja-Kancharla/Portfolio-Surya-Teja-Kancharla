import { useEffect } from "react";
import Typed from "typed.js";
import SocialIcons from "../components/SocialIcons";
import Button from "../components/Button";
import profileImg from "/images/profiledp.jpg";

export default function Home() {
  useEffect(() => {
    const typed = new Typed(".typed", {
      strings: [
        "Frontend Developer",
        "Backend Developer",
        "Full Stack Web Developer",
        "Machine Learning Engineer"
      ],
      typeSpeed: 70,
      backSpeed: 70,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <section id="home" className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 px-6 md:px-20 pt-16 md:pt-20 pb-0">
      <div className="max-w-xl">
        <h3 className="text-2xl font-semibold">Hi, my name is</h3>
        <h1 className="text-5xl font-bold my-2">Surya Teja Kancharla</h1>
        <h3 className="text-2xl font-semibold">
          And I'm a <span className="typed text-primary"></span>
        </h3>

        <p className="text-lg mt-6 max-w-xl">
          A full-stack developer specializing in MERN applications, machine-learning powered systems, 
          and automation-driven solutions. I focus on building software that delivers 
          real-world impact. 
        </p>

        <SocialIcons />

        <Button href="/resume/Kancharla Surya Teja Resume.pdf" text="Download Resume" />
      </div>

      <img
        src={profileImg}
        alt="Surya Teja"
        className="w-72 md:w-96 rounded-2xl shadow-glow animate-float"
      />
    </section>
  );
}
