import { services } from "../data/services";

export default function Services() {
  return (
    <section id="services" className="min-h-screen px-6 md:px-20">
      <h2 className="text-4xl font-bold text-center mb-10">My <span className="text-primary">Services</span></h2>

      <div className="grid md:grid-cols-3 gap-6">
        {services.map(s => (
          <div key={s.title} className="bg-secondary p-6 rounded-xl text-center hover:scale-105 transition">
            <h3 className="text-2xl font-semibold">{s.title}</h3>
            <p className="mt-3">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
