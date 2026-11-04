import AnimatedSection from "../AnimatedSection";

const kinaxisLogo = "/kinaxis.png";
const seequentLogo = "/seequent.png";
const akesLogo = "/akes.png";
const enercareLogo = "/enercare.jpeg";
const omersLogo = "/omers.jpg";
const experiences = [
  {
    title: "QA Engineer",
    company: "OMERS, Canada",
    companyLogo: omersLogo,
    period: "September 2026 - November 2026",
    description:
      `- Engineered and maintained Playwright/TypeScript automation frameworks using Page Object Model (POM) and Cucumber, developing and maintaining 350+ automated tests covering backend services, APIs, UI, and end-to-end workflows for myOMERS.\n
- Owned 12 GitLab CI/CD pipelines across myOMERS, Donna, and e-access, supporting backend, API, UI, and E2E testing; configured test tags and execution parameters to enable targeted biweekly release validation.\n
- Investigated and resolved automation failures in release cycle by debugging test scripts, analyzing pipeline results, and querying Oracle databases for test data; collaborated with developers and product owners to identify defects and mitigate release risks.`,
    technologies: ["Playwright", "TypeScript", "Cucumber", "GitLab CI", "Oracle", "SQL"],
  },
  {
    title: "Software Developer in Test",
    company: "Enercare, Canada",
    companyLogo: enercareLogo,
    period: "July 2026 - September 2026",
    description:
      `- Migrated Zuora's existing CSV-to-PostgreSQL ingestion workflow to Microsoft SQL Server, optimizing ingestion with BULK INSERT to reduce processing time by 35% across 1 GB of data and 183 tables.\n
- Led remote SQL Server infrastructure setup and coordinated with the network team to establish secure laptop access, eliminating individual VM dependencies for 8 engineers and enabling potential annual infrastructure cost avoidance of $19,200.\n
- Developed SQL Server-driven validation utilities to query backend records and compare database values directly against Compass UI fields, strengthening end-to-end data integrity testing and enabling detection of UI-to-database discrepancies.`,
    technologies: ["Java", "Selenium", "SQL Server", "PostgreSQL"],
  },
  {
    title: "Part-Time Software Developer",
    company: "Shopiz, Canada",
    period: "May 2025 - December 2025",
    description:
      `- Engineered a custom Shopify integration for order creation and invoicing, implementing access controls to protect
sensitive data and reduce recurring subscription costs by $6,000+ annually.\n
- Developed secure backend and frontend features including an MS Excel ingestion pipeline with role-based API
access and HMAC authentication, dynamic live chat availability and payment-specific email templates.
      `,
    technologies: ["Typescript", "Node.js", "Vercel", "Firebase"],
  },
  {
    title: "Software Developer Intern",
    company: "Kinaxis, Canada",
    companyLogo: kinaxisLogo,
    period: "January 2025 - April 2025",
    description:
      `- Resolved 40+ accessibility violations across Maestro Workflows, ensuring compliance with WCAG standards, raising overall accessibility page scores from poor to good.\n
- Improved UI consistency and performance by standardising reusable components and fixing critical logical issues in workflow activities, like preventing invalid resource creation during import/export operations.`,
    technologies: ["Typescript", "React.js", "Lighthouse", "Jest a11y"],
  },
  {
    title: "Software Developer in Test Intern",
    company: "Kinaxis, Canada",
    companyLogo: kinaxisLogo,
    period: "September 2024 - December 2024",
    description:
      `- Built robust test frameworks to reduce test flakiness and authored 60+ automated tests in TestCafe and MSTest for 30+ Maestro Workflow features, improving test reusability, and reducing QA time.\n
- Part of a hackathon team that successfully pitched and secured approval for migrating TestCafe tests to Playwright; built a regex-based conversion POC automating 80% of syntax translation to demonstrate migration feasibility.`,
    technologies: ["Typescript", "C#", "React.js", "Playwright", "TestCafe", "MSTest"],
  },

    {
    title: "Platform Engineer Intern",
    company: "Seequent, Canada",
    companyLogo: seequentLogo,
    period: "January 2023 - April 2023",
    description:
      `- Re-architected CI pipelines by migrating 6 infrastructures from Bamboo/vSphere to GitHub Actions and Azure, reducing infrastructure costs by $10,000 annually and reducing website test automation CI by 50% through parallelized test execution.\n
- Designed a GitHub Workflow Dashboard for 20+ CI/CD pipelines, providing near real-time visibility into build/test status for engineering teams.`,
    technologies: ["YAML", "Python", "GitHub Actions", "Azure", "Bamboo", "Selenium"],
  },

      {
    title: "QA Automation Engineer Intern",
    company: "Seequent, Canada",
    companyLogo: seequentLogo,
    period: "September 2022 - December 2022",
    description:
      `- Debugged 312 automation failures and authored 73 GUI test cases in Ranorex using C# .NET, reducing regression failures to 0% and increasing test coverage by 4% for Oasis Montaj 2022.2.0.\n
- Improved CI pipeline reliability by redesigning Selenium-based login automation to perform live authentication instead of relying on cached sessions, achieving 100% consistent pipeline execution.`,
    technologies: ["C#", ".NET", "Ranorex", "VSphere", "Bamboo"],
  },
    {
    title: "Programming Mentor",
    company: "Aga Khan Education Service, India",
    companyLogo: akesLogo,
    period: "April 2020 - September 2020",
    description:
      `- Designed and delivered weekly lessons introducing 13 middle-year students to Scratch, then advancing into C programming fundamentals.\n
- Received 100% positive feedback from students and supervisors for clarity of instruction, enabling students to complete projects ahead of schedule.
`,
    technologies: ["Scratch", "C"],
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
                      className={`glass-card p-6 hover:border-amber-400 transition-all duration-300 ${
                        index % 2 === 0 ? "md:mr-12" : "md:ml-12"
                      }`}
                    >
                      <span className="text-primary text-sm font-medium">
                        {exp.period}
                      </span>
                      <h3 className="font-display text-xl font-semibold mt-2">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        {exp.companyLogo && (
                          <img 
                            src={exp.companyLogo} 
                            alt={`${exp.company} logo`}
                            className="w-6 h-6 rounded object-cover"
                          />
                        )}
                        <p className="text-muted-foreground text-sm">
                          {exp.company}
                        </p>
                      </div>
                      <p className="text-muted-foreground mt-4 text-sm leading-relaxed whitespace-pre-line">
                        {exp.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {exp.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1.5 bg-secondary/80 text-secondary-foreground rounded-full text-sm font-medium hover:bg-primary/20 hover:text-primary transition-colors duration-200"
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
