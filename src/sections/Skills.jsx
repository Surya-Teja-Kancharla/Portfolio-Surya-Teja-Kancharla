import { skills } from "../data/skills";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";

function Block({ title, items }) {
  return (
    <div className="bg-secondary p-8 rounded-2xl shadow-soft hover:-translate-y-1 transition">
      <h3 className="text-xl font-semibold mb-4 text-primary">
        {title}
      </h3>

      <div className="flex flex-wrap gap-3">
        {items.map((i) => (
          <span
            key={i}
            className="px-4 py-1 text-sm bg-bg rounded-full border border-primary/30"
          >
            {i}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen px-6 md:px-20">
      <SectionHeading title="My" highlight="Skills" />

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <Reveal>
          <Block title="Programming" items={skills.programming} />
        </Reveal>

        <Reveal>
          <Block title="Web Technologies" items={skills.web} />
        </Reveal>

        <Reveal>
          <Block title="Databases" items={skills.databases} />
        </Reveal>

        <Reveal>
          <Block title="Tools" items={skills.tools} />
        </Reveal>

        <Reveal>
          <Block title="Domains" items={skills.domains} />
        </Reveal>
      </div>
    </section>
  );
}
