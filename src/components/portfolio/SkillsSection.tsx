import AnimatedSection from "../AnimatedSection";
import { Code, Database, Layers, TestTube, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: Code,
    skills: ["C#", "JavaScript", "TypeScript", "Java", "Python", "C", "SQL", "Liquid"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["SQL Server", "MySQL", "PostgreSQL", "Firebase", "MongoDB", "Supabase"],
  },
  {
    title: "Frameworks & Libraries",
    icon: Layers,
    skills: [".NET Core", "ASP.NET Core", "Blazor", "Entity Framework", "ReactJS", "ExpressJS", "WebRTC", "NestJS"],
  },
  {
    title: "Testing",
    icon: TestTube,
    skills: ["Jest", "MSTest", "TestCafe", "Playwright", "Ranorex", "Unit", "Integration", "E2E"],
  },
  {
    title: "Developer Tools and OS",
    icon: Wrench,
    skills: ["Jenkins", "Git", "GitHub Actions", "Bamboo", "Kubernetes", "Selenium", "Docker", "Azure", "Linux", "Unix"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="relative">
      <div className="section-container">
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-4">
            <div className="accent-line" />
            <span className="text-primary font-medium tracking-widest uppercase text-sm">
              Skills
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-12">
            Technical Skills
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className="glass-card p-6 h-full hover:border-primary/30 transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <category.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display text-lg font-semibold">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1.5 bg-secondary/80 text-secondary-foreground rounded-full text-sm font-medium hover:bg-primary/20 hover:text-primary transition-colors duration-200"
                    >
                      {skill}
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

export default SkillsSection;
