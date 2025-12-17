import AnimatedSection from "../AnimatedSection";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Senior Full-Stack Developer",
    company: "Tech Innovations Inc.",
    period: "2022 - Present",
    description:
      "Leading development of enterprise applications, mentoring junior developers, and architecting scalable solutions.",
    technologies: ["React", "Node.js", "AWS", "PostgreSQL"],
  },
  {
    title: "Full-Stack Developer",
    company: "Digital Solutions Co.",
    period: "2020 - 2022",
    description:
      "Built and maintained multiple client projects, implemented CI/CD pipelines, and improved application performance by 40%.",
    technologies: ["Vue.js", "Python", "Docker", "MongoDB"],
  },
  {
    title: "Frontend Developer",
    company: "Creative Agency",
    period: "2019 - 2020",
    description:
      "Developed responsive web interfaces, collaborated with design teams, and ensured cross-browser compatibility.",
    technologies: ["React", "SCSS", "JavaScript", "Figma"],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="relative">
      <div className="section-container">
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-4">
            <div className="accent-line" />
            <span className="text-primary font-medium tracking-widest uppercase text-sm">
              Experience
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-12">
            Where I've worked
          </h2>
        </AnimatedSection>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <AnimatedSection key={index} delay={index * 0.15}>
                <div
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 w-3 h-3 rounded-full bg-primary -translate-x-1 md:-translate-x-1.5 mt-8" />

                  {/* Content */}
                  <div className="md:w-1/2 pl-8 md:pl-0">
                    <div
                      className={`glass-card p-6 hover:border-primary/30 transition-all duration-300 ${
                        index % 2 === 0 ? "md:mr-12" : "md:ml-12"
                      }`}
                    >
                      <span className="text-primary text-sm font-medium">
                        {exp.period}
                      </span>
                      <h3 className="font-display text-xl font-semibold mt-2">
                        {exp.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mt-1">
                        {exp.company}
                      </p>
                      <p className="text-muted-foreground mt-4 text-sm leading-relaxed">
                        {exp.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {exp.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
