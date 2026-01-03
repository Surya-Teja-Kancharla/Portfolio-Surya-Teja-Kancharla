import { experience } from "../data/experience";
import SectionHeading from "../components/SectionHeading";
import Timeline from "../components/TimelineItem";
import Reveal from "../components/Reveal";

export default function Experience() {
  return (
   <section id="experience" className="min-h-screen bg-bgSecondary px-6 md:px-20">
      <SectionHeading title="Work" highlight="Experience" />
      <Reveal>
        <Timeline items={experience} />
      </Reveal>
    </section>

  );
}
