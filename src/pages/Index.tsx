import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import WhyMe from "@/components/WhyMe";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <WhyMe />
      <Contact />

      {/* Footer */}
      <footer className="py-8 text-center border-t border-white/5">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Mohammad Junaid. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Index;
