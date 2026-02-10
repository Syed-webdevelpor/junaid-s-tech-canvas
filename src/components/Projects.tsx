import ScrollReveal from "./ScrollReveal";
import { TrendingUp, BarChart3, Bot, Monitor, FileText, Globe } from "lucide-react";

const projects = [
  {
    icon: TrendingUp,
    title: "Trading Engine",
    description: "Built a complete trading engine handling orders, positions, margin calculations, and real-time PnL tracking with precision for financial markets.",
  },
  {
    icon: BarChart3,
    title: "Crypto & Stock Candle Sync",
    description: "Developed systems to sync real-time and historical candlestick data for crypto and stock markets, powering analytics dashboards.",
  },
  {
    icon: Bot,
    title: "24/7 Cloud Automation Bots",
    description: "Deployed always-on automation bots on AWS EC2 with PM2 process management, handling OTP flows, web scraping, and scheduled tasks.",
  },
  {
    icon: Monitor,
    title: "Desktop Applications",
    description: "Created cross-platform desktop applications using Electron.js with Angular.js frontend, delivering native-like experiences.",
  },
  {
    icon: FileText,
    title: "Document & Digital Signatures",
    description: "Implemented document management with digital signature workflows, integrating AWS S3 for storage and PDF generation.",
  },
  {
    icon: Globe,
    title: "WordPress Sites & Plugins",
    description: "Developed custom WordPress websites and plugins, delivering tailored CMS solutions for clients with specific business needs.",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            Projects & <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-16" />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ScrollReveal key={i}>
              <div className="glass rounded-2xl p-6 h-full hover:bg-white/10 transition-all duration-300 group hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1">
                <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 w-fit mb-4 group-hover:from-primary/30 group-hover:to-secondary/30 transition-all">
                  <project.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
