export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 md:px-20 py-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted">
      <p>© 2025 Surya Teja. All rights reserved.</p>
      <a
        href="#home"
        className="mt-4 md:mt-0 px-4 py-2 rounded-full border border-primary/40 text-primary hover:bg-primary hover:text-bg transition"
      >
        Back to top
      </a>
    </footer>
  );
}
