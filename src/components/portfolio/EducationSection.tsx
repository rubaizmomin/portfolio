import AnimatedSection from "../AnimatedSection";
import { GraduationCap, BookOpen, Calendar, MapPin } from "lucide-react";

const coursework = [
  "Software Tools and Systems Programming",
  "Software Design",
  "Database Management Systems",
   "Web Programming",
  "Algorithm Design and Analysis",
  "Computer Networks",
  "Design and Analysis of Data Structures",
  "Information Networks",
  "Computer and Network Security",
  "Artificial Intelligence",
  "Engineering Large Software Systems",
    "Operating Systems",
  "Computability and Computational Complexity"
];

const uoftLogo = "/uoft.png";
const EducationSection = () => {
  return (
    <section id="education" className="relative bg-secondary/30">
      <div className="section-container">
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-4">
            <div className="accent-line" />
            <span className="text-primary font-medium tracking-widest uppercase text-sm">
              Education
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-12">
            Academic Background
          </h2>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Main Education Card */}
          <AnimatedSection delay={0.1}>
            <div className="glass-card p-8 h-full hover:border-primary/30 transition-all duration-300 group">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-4 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-2xl font-bold">
                    Bachelor's in Computer Science
                  </h3>
                  <p className="text-primary font-medium mt-1">
                    Software Engineering Stream (Co-op)
                  </p>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="w-4 h-4 text-primary" />
                  <div className="flex items-center gap-2">
                    <img 
                            src={uoftLogo} 
                            alt={`University of Toronto logo`}
                            className="w-6 h-6 rounded object-cover"
                    />
                    <span>University of Toronto, Toronto, CA</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span>September 2020 - April 2026</span>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Pursuing a comprehensive computer science education with a focus
                on software engineering principles, system design, and practical
                co-op experience in the industry.
              </p>
            </div>
          </AnimatedSection>

          {/* Coursework Card */}
          <AnimatedSection delay={0.2}>
            <div className="glass-card p-8 h-full hover:border-primary/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h3 className="font-display text-xl font-semibold">
                  Relevant Coursework
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {coursework.map((course, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-secondary/80 text-secondary-foreground rounded-full text-sm font-medium hover:bg-primary/20 hover:text-primary transition-colors duration-200"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
