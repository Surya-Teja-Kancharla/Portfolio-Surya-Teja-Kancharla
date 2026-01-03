import { experience } from "../data/experience";
import SectionHeading from "../components/SectionHeading";
import Timeline from "../components/TimelineItem";

export default function Experience() {
  return (
    <section id="experience" className="min-h-screen bg-bgSecondary px-6 md:px-20">
      <SectionHeading title="Work" highlight="Experience" />
      <Timeline items={experience} />
    </section>
  );
}
