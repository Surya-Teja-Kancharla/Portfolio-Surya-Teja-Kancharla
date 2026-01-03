import { achievements } from "../data/achievements";
import SectionHeading from "../components/SectionHeading";

export default function Achievements() {
  return (
    <section id="achievements" className="min-h-screen bg-bgSecondary px-6 md:px-20">
      <SectionHeading title="My" highlight="Achievements" />
      <ul className="list-disc ml-6 space-y-3">
        {achievements.map((a) => <li key={a}>{a}</li>)}
      </ul>
    </section>
  );
}
