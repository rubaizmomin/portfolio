import AnimatedSection from "../AnimatedSection";
import { Code2, Lock, Palette, Rocket } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
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
                I'm a Computer Science student with a mix of co-op and freelance experience, 
                building secure, scalable applications across e-commerce, SaaS, and automation.
              </p>
              <p className="leading-relaxed">
                In my co-ops, I contributed to enterprise-grade solutions at Kinaxis and Seequent,
                gaining hands-on experience in full-stack development and optimising infrastructures
                for performance and reliability. I also developed real-impact coop projects to solve
                existing day-to-day issues within the company, gaining impressive coop performance ratings.
              </p>
              <p className="leading-relaxed">
                Outside of co-op, I freelanced with Shopiz, where I delivered
                end-to-end features like custom Shopify integrations resulting in saving $6000 on subscription cost
                and role-based access systems secured with HMAC authentication. I've also built innovative problem solving
                projects like Orchestra (a bot marketplace and scheduler platform) and Verboverse, allowing people with no
                common languageto communicate, showcasing both technical depth and leadership.
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
