import { certifications } from "../data/certifications";
import SectionHeading from "../components/SectionHeading";

export default function Certifications() {
  return (
    <section id="certifications" className="min-h-screen px-6 md:px-20">
      <SectionHeading title="My" highlight="Certifications" />
      <div className="grid md:grid-cols-2 gap-4">
        {certifications.map((c) => (
          <div key={c} className="bg-bgSecondary p-4 rounded-xl">
            {c}
          </div>
        ))}
      </div>
    </section>
  );
}
