import { useState, FormEvent } from "react";
import ScrollReveal from "./ScrollReveal";
import { Github, Linkedin, ExternalLink, Mail, Send } from "lucide-react";

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com/Syed-webdevelpor" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/syed-junaid-56391a234/" },
  { icon: ExternalLink, label: "Fiverr", href: "https://www.fiverr.com/s/qDX7b9Z" },
  { icon: Mail, label: "Email", href: "mailto:junaidsherazi535@gmail.com" },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return;

    setStatus("sending");

    try {
      const response = await fetch("https://portfolio-server-one-flax.vercel.app/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: form.email,
          name: form.name,
          details: form.message,
        }),
      });

      if (response.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      {/* Gradient divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-16" />
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <ScrollReveal>
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-6">
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">Name</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                  placeholder="Your name"
                  maxLength={100}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                  placeholder="your@email.com"
                  maxLength={255}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">Message</label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all resize-none"
                  placeholder="Your message..."
                  maxLength={1000}
                  required
                />
              </div>
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all disabled:opacity-50 hover:scale-[1.02]"
              >
                {status === "sending" ? "Sending..." : status === "sent" ? "Sent! ✓" : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>
              {status === "error" && (
                <p className="text-sm text-destructive text-center">Something went wrong. Please try again.</p>
              )}
            </form>
          </ScrollReveal>

          <ScrollReveal>
            <div className="flex flex-col justify-center h-full space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Let's build something great together.</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Whether you need a backend system, a full-stack web app, or a desktop application — I'm ready to help bring your ideas to life. Drop me a message and I'll get back to you promptly.
                </p>
              </div>

              <div className="flex gap-4">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="p-3 glass rounded-xl hover:bg-white/10 transition-all group hover:scale-110"
                  >
                    <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
