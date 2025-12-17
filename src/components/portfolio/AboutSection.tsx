import AnimatedSection from "../AnimatedSection";
import { Code2, Palette, Rocket } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable code with best practices",
    },
    {
      icon: Palette,
      title: "Design Focus",
      description: "Creating beautiful interfaces with attention to detail",
    },
    {
      icon: Rocket,
      title: "Performance",
      description: "Building fast, optimized applications that scale",
    },
  ];

  return (
    <section id="about" className="relative">
      <div className="section-container">
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-4">
            <div className="accent-line" />
            <span className="text-primary font-medium tracking-widest uppercase text-sm">
              About Me
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">
            Turning ideas into reality
          </h2>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <AnimatedSection delay={0.1}>
            <div className="space-y-6 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                I'm a passionate developer with over 5 years of experience building 
                web applications. My journey started with curiosity about how things 
                work on the internet, and it has evolved into a career I truly love.
              </p>
              <p className="leading-relaxed">
                I specialize in full-stack development, working with modern technologies 
                like React, TypeScript, Node.js, and various cloud platforms. I believe 
                in writing clean, maintainable code and creating user experiences that 
                are both beautiful and functional.
              </p>
              <p className="leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, 
                contributing to open source projects, or sharing knowledge with the 
                developer community.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="grid gap-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="glass-card p-6 hover:border-primary/30 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-lg mb-1">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
