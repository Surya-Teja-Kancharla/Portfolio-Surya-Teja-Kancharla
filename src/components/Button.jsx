export default function Button({ text, href }) {
  return (
    <a
      href={href}
      target="_blank"
      className="inline-block mt-8 px-10 py-3 rounded-full bg-primary text-bg font-semibold tracking-wide shadow-glow hover:shadow-none hover:scale-105 transition"
    >
      {text}
    </a>
  );
}
