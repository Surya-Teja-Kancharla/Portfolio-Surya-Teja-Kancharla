import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="bg-bgSecondary px-6 md:px-20">
      <SectionHeading title="Featured" highlight="Projects" />

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.1}>
            <div className="bg-bg p-8 rounded-2xl shadow-soft hover:shadow-glow transition">
              <h3 className="text-2xl font-semibold mb-3">{p.title}</h3>

              <p className="mb-4">{p.desc}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {p.tech.map(t => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1 rounded-full border border-primary/40 text-primary"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-6 text-sm font-semibold">
                <a href={p.github} target="_blank" className="text-primary hover:underline">
                  GitHub
                </a>
                {p.live && (
                  <a href={p.live} target="_blank" className="text-primary hover:underline">
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
