import ScrollReveal from "./ScrollReveal";
import { Server, Layers, Calculator, Rocket, MessageSquare } from "lucide-react";

const reasons = [
  { icon: Server, title: "Backend-First Architecture", description: "I design systems from the backend up, ensuring solid foundations before building interfaces." },
  { icon: Layers, title: "Full-Stack & Desktop Experience", description: "From web apps to Electron desktop apps, I deliver across platforms." },
  { icon: Calculator, title: "Financial Precision", description: "Experience with trading engines means I understand the importance of accuracy in calculations." },
  { icon: Rocket, title: "Production-Ready Code", description: "I write scalable, maintainable code that's built for production from day one." },
  { icon: MessageSquare, title: "Clear Communication", description: "I take ownership of projects and communicate progress clearly and proactively." },
];

const WhyMe = () => {
  return (
    <section id="why-me" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            Why <span className="gradient-text">Work With Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-16" />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reasons.map((reason, i) => (
            <ScrollReveal key={i}>
              <div className="flex items-start gap-4 glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group h-full">
                <div className="p-2 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex-shrink-0">
                  <reason.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{reason.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyMe;
