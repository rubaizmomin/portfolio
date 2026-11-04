import AnimatedSection from "../AnimatedSection";
import { Code2, Lock, Palette, Rocket } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Best Practices",
      description: "Writing maintainable, scalable code with best practices",
    },
    {
      icon: Lock,
      title: "Security",
      description: "Creating secure and reliable software solutions",
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
            Who I Am
          </h2>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <AnimatedSection delay={0.1}>
            <div className="space-y-6 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                I’m someone who enjoys solving real problems with technology. Through co-op roles,
                freelance work, and testing-focused development, I’ve built tools and systems that improve
                reliability, reduce waste, and help teams ship with more confidence.
              </p>
              <p className="leading-relaxed">
                My work has included modernizing CI workflows, improving accessibility and UI consistency, and
                automating critical quality checks across enterprise applications. At Enercare, I helped set up
                remote SQL Server infrastructure and reduced reliance on individual VMs for 8 engineers saving $19,000+, creating a
                more scalable and efficient testing setup. At Seequent, I helped reduce annual infrastructure costs
                by $10,000 and cut website test automation CI time by 50%. Outside of work, I built
                a custom Shopify integration that saved more than $6,000 annually in recurring subscription costs.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="grid gap-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="glass-card p-6 hover:border-amber-400 transition-all duration-300 group"
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
