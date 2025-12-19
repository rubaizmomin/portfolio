import AnimatedSection from "../AnimatedSection";
import { Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/rubaizmomin",
    username: "rubaizmomin",
  },
    {
    name: "Email",
    icon: Mail,
    url: "mailto:rubaizmomin@gmail.com",
    username: "rubaizmomin@gmail.com",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://linkedin.com/in/rubaizmomin",
    username: "in/rubaizmomin",
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="relative">
      <div className="section-container">
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-4">
            <div className="accent-line" />
            <span className="text-primary font-medium tracking-widest uppercase text-sm">
              Contact
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Let's Connect
          </h2>
          <p className="text-muted-foreground max-w-xl mb-12">
            Feel free to reach out for opportunities, or just
            to say hello.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card px-8 py-6 flex items-center gap-4 hover:border-primary/50 transition-all duration-300 group w-full sm:w-auto"
              >
                <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <link.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-semibold">{link.name}</h3>
                  <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                    {link.username}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ContactSection;
