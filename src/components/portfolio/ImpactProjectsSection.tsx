import AnimatedSection from "../AnimatedSection";
import { ExternalLink, Users } from "lucide-react";

const impactProjects = [
  {
    title: "Community Health Tracker",
    description:
      "A health monitoring platform used by 10,000+ users to track wellness metrics and connect with healthcare providers.",
    impact: "10,000+ active users",
    technologies: ["React", "Node.js", "PostgreSQL"],
    liveUrl: "#",
  },
  {
    title: "Local Business Directory",
    description:
      "Helping small businesses gain visibility in their communities with an accessible, searchable directory platform.",
    impact: "500+ businesses listed",
    technologies: ["Next.js", "Supabase", "Tailwind"],
    liveUrl: "#",
  },
];

const ImpactProjectsSection = () => {
  return (
    <section id="impact-projects" className="relative">
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
              <div className="glass-card p-6 group hover:border-primary/50 transition-colors">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-display text-xl font-semibold">
                    {project.title}
                  </h3>
                  <a
                    href={project.liveUrl}
                    className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex items-center gap-2 mb-4 text-primary">
                  <Users className="w-4 h-4" />
                  <span className="text-sm font-medium">{project.impact}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
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
