import AnimatedSection from "../AnimatedSection";
import { ExternalLink, Users } from "lucide-react";

const impactProjects = [
  {
    title: "GitHub Actions Dashboard",
    description:
      `A centralized dashboard for monitoring 20+ GitHub Actions workflows across multiple repositories to get real-time insights for Seequent.`,
    impact: "500+ developers at Seequent",
    technologies: ["React.js", "Node.js", "Express.js", "GitHub API"],
  },
  {
    title: "Delta",
    description:
      "A web app that allows developers to configure personalized test suite collection from 100+ test suites and view relevant results from 250,000+ daily test runs, reducing unncessary noise and saving time.",
    impact: "1000+ developers at Kinaxis",
    technologies: ["ASP.NET Blazor Webassembly", "ASP.NET Web API", "SSMS", "Entity Framework"],
  },
    {
    title: "Apache Superset (Ongoing)",
    description:
      "Migration of react-dnd (unmaintained) to dnd-kit (actively maintained) for improved drag-and-drop performance and accessibility in Apache Superset, an open-source data visualization tool used by thousands of organizations worldwide.",
    impact: "1000+ organisations",
    technologies: ["Typescript", "dnd-kit", "React.js", "Node.js"],
    liveUrl: "https://github.com/apache/superset/pull/36301"
  },
];

const ImpactProjectsSection = () => {
  return (
    <section id="impact" className="relative">
      <div className="section-container">
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-4">
            <div className="accent-line" />
            <span className="text-primary font-medium tracking-widest uppercase text-sm">
              Impact
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Real-world impact
          </h2>
          <p className="text-muted-foreground max-w-2xl mb-12">
            Projects that are actively used by people and making a difference.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          {impactProjects.map((project, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className="glass-card p-6 group hover:border-amber-400 transition-colors h-full flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-display text-xl font-semibold">
                    {project.title}
                  </h3>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
                <div className="flex-1">
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <div className="mt-auto flex items-center gap-2 text-primary">
                  <Users className="w-4 h-4" />
                  <span className="text-sm font-medium">{project.impact}</span>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 bg-secondary/80 text-secondary-foreground rounded-full text-sm font-medium hover:bg-primary/20 hover:text-primary transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactProjectsSection;
