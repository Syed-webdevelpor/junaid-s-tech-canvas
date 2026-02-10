import ScrollReveal from "./ScrollReveal";

const categories = [
  {
    title: "Backend",
    skills: ["Node.js", "NestJS", "Express"],
  },
  {
    title: "Frontend",
    skills: ["Angular.js", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "Databases",
    skills: ["MongoDB", "SQL", "PostgreSQL", "MySQL", "Redis"],
  },
  {
    title: "Desktop Apps",
    skills: ["Electron.js"],
  },
  {
    title: "CMS",
    skills: ["WordPress"],
  },
  {
    title: "Automation",
    skills: ["Playwright", "Bots", "OTP Handling"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS EC2", "PM2", "Cron Jobs"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            Skills & <span className="gradient-text">Tech Stack</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-16" />
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <ScrollReveal key={i}>
              <div className="glass rounded-2xl p-6 h-full hover:bg-white/10 transition-all duration-300 group hover:shadow-lg hover:shadow-primary/10 gradient-border">
                <h3 className="text-lg font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {cat.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-muted-foreground border border-white/10 group-hover:border-primary/30 group-hover:text-foreground transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
