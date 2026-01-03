import { certifications } from "../data/certifications";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="min-h-screen bg-bgSecondary px-6 md:px-20"
    >
      <SectionHeading title="My" highlight="Certifications" />

      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {certifications.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.08}>
            <div
              className="
                bg-bg p-6 rounded-2xl shadow-soft hover:shadow-glow transition
                flex flex-col
                min-h-[170px]
              "
            >
              {/* Title */}
              <h3 className="text-lg font-semibold mb-1">
                {c.title}
              </h3>

              {/* Issuer */}
              <p className="text-sm text-muted">
                {c.issuer}
                {c.duration && ` · ${c.duration}`}
              </p>

              {/* Distinction */}
              {c.distinction && (
                <p className="mt-2 text-sm font-medium text-primary">
                  {c.distinction}
                </p>
              )}

              {/* CTA pinned to bottom */}
              <div className="mt-auto pt-4">
                <a
                  href={c.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-primary hover:underline"
                >
                  View Certificate
                </a>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
