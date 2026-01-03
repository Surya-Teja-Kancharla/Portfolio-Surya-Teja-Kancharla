import { education } from "../data/education";
import SectionHeading from "../components/SectionHeading";
import Timeline from "../components/TimelineItem";

export default function Education() {
  return (
    <section id="education" className="min-h-screen px-6 md:px-20">
      <SectionHeading title="My" highlight="Education" />
      <Timeline items={education} />
    </section>
  );
}
