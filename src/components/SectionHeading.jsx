export default function SectionHeading({ title, highlight }) {
  return (
    <div className="text-center mb-20 animate-fadeUp">
      <h2 className="text-4xl md:text-5xl font-extrabold">
        {title} <span className="text-primary">{highlight}</span>
      </h2>
      <div className="mt-6 mx-auto h-1 w-24 bg-primary rounded-full"></div>
    </div>
  );
}
