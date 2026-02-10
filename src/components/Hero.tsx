import profileImg from "@/assets/profile.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(230,40%,10%)] via-[hsl(260,30%,15%)] to-[hsl(200,40%,8%)] animate-gradient" />
      
      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
      <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
        {/* Text content */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight animate-fade-up">
            <span className="text-foreground">Backend & Full-Stack Engineer</span>{" "}
            <span className="gradient-text">building scalable, high-performance</span>{" "}
            <span className="text-foreground">web & desktop applications.</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl animate-fade-up-delay-1">
            Specialized in Node.js, NestJS, Express, Electron.js, Angular.js, Databases, Automation & Cloud Infrastructure.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up-delay-2">
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold transition-all hover:shadow-lg hover:shadow-primary/25 hover:scale-105"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg glass hover:bg-white/10 text-foreground font-semibold transition-all hover:scale-105"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Profile photo */}
        <div className="flex-shrink-0 animate-fade-up-delay-3">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full blur-md opacity-60" />
            <img
              src={profileImg}
              alt="Mohammad Junaid - Backend & Full-Stack Engineer"
              className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full object-cover border-2 border-white/20 shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
