import { achievements } from "../data/achievements";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="min-h-screen bg-bg px-6 md:px-20"
    >
      <SectionHeading title="My" highlight="Achievements" />

      <ul className="space-y-6 max-w-4xl mx-auto">
        {achievements.map((a, i) => (
          <Reveal key={a.title} delay={i * 0.08}>
            <li className="bg-bgSecondary p-6 rounded-2xl shadow-soft">
              <h3 className="text-lg font-semibold mb-1">
                {a.title}
              </h3>

              <p className="text-sm text-muted mb-2">
                {a.description}
              </p>

              {a.links && (
                <div className="flex gap-4 text-sm font-medium">
                  {a.links.map((l) => (
                    <a
                      key={l.label}
                      href={l.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      {l.label}
                    </a>
                  ))}
                </div>
              )}
            </li>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
