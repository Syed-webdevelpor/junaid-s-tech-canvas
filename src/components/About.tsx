import ScrollReveal from "./ScrollReveal";
import { Code, Monitor, Globe, Cloud, Bot, Database } from "lucide-react";

const highlights = [
  { icon: Code, text: "2+ years backend & full-stack experience" },
  { icon: Monitor, text: "Desktop applications using Electron.js" },
  { icon: Globe, text: "Web apps with Angular, Node.js, Express" },
  { icon: Database, text: "MongoDB, SQL, PostgreSQL, MySQL, Redis" },
  { icon: Bot, text: "Automation bots & cloud systems" },
  { icon: Cloud, text: "WordPress development & custom plugins" },
];

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-16" />
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <ScrollReveal>
            <div className="glass rounded-2xl p-8">
              <p className="text-muted-foreground leading-relaxed text-lg">
                I'm <span className="text-foreground font-semibold">Mohammad Junaid</span>, a Backend & Full-Stack Software Engineer passionate about building robust, scalable systems. With hands-on experience in trading engines, cloud automation, and desktop applications, I bring a backend-first mindset to every project.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg mt-4">
                From designing high-frequency trading systems with precise margin calculations to deploying 24/7 automation bots on AWS, I focus on writing production-ready code that performs under pressure.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, i) => (
                <div
                  key={i}
                  className="glass rounded-xl p-4 flex items-start gap-3 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="p-2 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:from-primary/30 group-hover:to-secondary/30 transition-all">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default About;
