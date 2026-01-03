export default function Timeline({ items }) {
  return (
    <div className="relative border-l border-primary/30 ml-4 mt-16">
      {items.map((item, index) => (
        <div
          key={index}
          className="mb-14 ml-8 relative animate-fadeUp"
        >
          {/* Timeline Dot */}
          <span className="absolute -left-[18px] top-2 w-5 h-5 bg-primary rounded-full border-4 border-bg shadow-glow"></span>

          {/* Timeline Card */}
          <div className="bg-bg p-7 rounded-2xl shadow-soft hover:shadow-glow transition">
            <h3 className="text-xl font-semibold leading-snug">
              {item.role || item.degree}
            </h3>

            <p className="text-primary text-sm font-medium mt-1">
              {item.company || item.institute}
            </p>

            <p className="text-sm text-muted mt-1">
              {item.duration}
              {item.location && ` • ${item.location}`}
            </p>

            {item.cgpa && (
              <p className="mt-3 text-sm font-medium">
                CGPA:{" "}
                <span className="text-primary font-semibold">
                  {item.cgpa}
                </span>
              </p>
            )}

            {item.points && (
              <ul className="list-disc ml-5 mt-4 space-y-2 text-sm text-muted">
                {item.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
