import { useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          setForm({ name: "", email: "", message: "" });
          setLoading(false);
        },
        () => {
          setStatus("Failed to send message. Please try again.");
          setLoading(false);
        }
      );
  };

  return (
    <section id="contact" className="min-h-screen bg-bg px-6 md:px-20">
      <h2 className="text-4xl font-bold text-center mb-6">
        Contact <span className="text-primary">Me</span>
      </h2>

      <form onSubmit={handleSubmit} className="max-w-xl mx-auto grid gap-4">
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Full Name"
          required
          className="p-3 bg-bgSecondary rounded"
        />

        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          required
          className="p-3 bg-bgSecondary rounded"
        />

        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Message"
          rows="5"
          required
          className="p-3 bg-bgSecondary rounded"
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-primary text-bg py-3 rounded-full font-semibold disabled:opacity-60"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        {status && (
          <p className="text-center text-sm text-primary">{status}</p>
        )}
      </form>
    </section>
  );
}
