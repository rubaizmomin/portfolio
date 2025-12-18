import AnimatedSection from "../AnimatedSection";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Part-Time Full-Stack Developer",
    company: "Shopiz",
    period: "May 2025 - Present",
    description:
      `Engineered a cost-effective solution to a budget challenge by developing a custom Shopify integration for order creation and invoicing, implementing access controls to safeguard sensitive data and reduce recurring subscription expenses by $6,000+ per year.

      Developed and secured backend services with an Excel-to-database parser, implementing role-based API access and HMAC authentication to protect sensitive operations from unauthorised access and timing and replay attacks.
      `,
    technologies: ["Typescript", "Node.js", "Vercel", "Firebase"],
  },
  {
    title: "Software Developer Co-op",
    company: "Kinaxis",
    period: "January 2025 - April 2025",
    description:
      `Resolved 40+ accessibility violations across Maestro™ Workflows, ensuring compliance with a11y standards and maintaining
coverage with Jest accessibility tests, raising overall accessibility scores from poor to acceptable.

Improved UI consistency and performance by standardising reusable components and fixing logical issues in business layer, preventing invalid resource creation during import/export operations.`,
    technologies: ["Typescript", "React.js", "Lighthouse", "Jest a11y"],
  },
  {
    title: "Test Framework Developer Co-op",
    company: "Kinaxis",
    period: "September 2024 - December 2024",
    description:
      `Member of the core team to come up with the idea of migrating from TestCafe to Playwright to improve test stability and test runtime.

      Built robust test frameworks for 30+ Maestro™ Workflow features, enabling stable end-to-end testing and increasing test
reusability across components.

Authored 60+ reliable automated and unit tests (TestCafe + MSTest) with 0% flakiness, ensuring critical test coverage
without over-execution.`,
    technologies: ["Typescript", "C#", "React.js", "Playwright", "TestCafe", "MSTest"],
  },

    {
    title: "Platform Engineer Co-op",
    company: "Seequent",
    period: "January 2023 - April 2023",
    description:
      `Re-architected CI/CD pipelines by migrating 6 infrastructures from Bamboo/VSphere to GitHub Actions + Azure, reducing
infrastructure costs by $10,000 annually and improving each test suite run time by 15%.

Designed a GitHub Workflow Dashboard for 20+ workflows pipelines, providing near real-time visibility into build/test status
for engineering teams.

Optimized sign-in automation scripts for licensed product authentication, cutting 4-5 minutes per login and eliminating
cache dependencies.`,
    technologies: ["YAML", "Python", "GitHub Actions", "Azure", "Bamboo", "Selenium"],
  },

      {
    title: "Automation Engineer Co-op",
    company: "Seequent",
    period: "September 2022 - December 2022",
    description:
      `Debugged 312 test automation failures, reducing regression failure rate from 23% to 0% in Oasis Montaj 2022.2.0.

Authored 73 new GUI test cases in Ranorex and improved the reliability of complex gestures like drag and drop, resizing
images, leading to improving overall test coverage by 4%.
`,
    technologies: ["C#", ".NET", "Ranorex", "VSphere", "Bamboo"],
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
                      <p className="text-muted-foreground mt-4 text-sm leading-relaxed whitespace-pre-line">
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
