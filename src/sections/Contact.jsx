export default function Contact() {
  return (
    <section id="contact" className="min-h-screen px-6 md:px-20">
      <h2 className="text-4xl font-bold text-center mb-6">Contact <span className="text-primary">Me</span></h2>

      <form className="max-w-xl mx-auto grid gap-4">
        <input placeholder="Full Name" className="p-3 bg-bgSecondary rounded" />
        <input placeholder="Email" className="p-3 bg-bgSecondary rounded" />
        <textarea placeholder="Message" rows="5" className="p-3 bg-bgSecondary rounded"></textarea>
        <button className="bg-primary text-bg py-3 rounded-full font-semibold">Send Message</button>
      </form>
    </section>
  );
}
