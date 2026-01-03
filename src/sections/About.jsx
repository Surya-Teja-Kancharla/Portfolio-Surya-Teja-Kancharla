import Reveal from "../components/Reveal";

export default function About() {
  return (
    <section id="about" className="bg-bgSecondary px-6 md:px-20">
      <Reveal>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">
            About <span className="text-primary">Me</span>
          </h2>

          <p className="text-lg mb-4">
            I am a full-stack developer with strong expertise in building
            MERN-based applications, machine-learning backed systems, and
            automation-driven solutions.
          </p>

          <p>
            With an academic foundation in Computer Science and AI & ML,
            I focus on designing high-impact software that solves real-world 
            problems. I enjoy working across the stack, from crafting responsive 
            user interfaces to engineering backend APIs and intelligent data-driven 
            features.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
