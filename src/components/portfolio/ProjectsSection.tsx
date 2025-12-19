import AnimatedSection from "../AnimatedSection";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Verboverse",
    description:
      `Led a 3-member team to develop a video/audio translation platform that supports 50+ languages for real-time
cross-language communication.
Designed backend peer connections using WebRTC + MongoDB, supporting lengthy meetings, text channels and live
translation delivery.
Built and deployed a RESTful API for P2P connections, chat persistence, and email notifications, improving reliability and user
experience`,
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "WebRTC", "Google Translate API"],
    image: "/verboverse.png",
    githubUrl: "https://github.com/rubaizmomin/project-snack-overflow",
  },
  {
    title: "Routing Algorithm Simulator",
    description: `Created a routing simulation to compare Forward Search Algorithm (Dijkstra) and Distance Vector Algorithm (Bellman Ford)
on metrics like algorithm runtime, stabilisation time on link failures varying across different types of topologies.
Developed the link failure and recovery feature which runs parallel to the simulation, seeing real-time behaviour of the
network due to random link failures/recovery to study network stabilisation.
Parsed miniedit graph to translate to an adjacency list to run algorithms and parsed adjacency list back to miniEdit to change
link states due to link failures/recovery.`,
    technologies: ["Mininet", "Python", "NetworkX"],
    image: "/routing.avif",
    githubUrl: "https://github.com/rubaizmomin/routing-algorithm-simulation",
  },
  {
    title: "Conductor",
    description:
      `Created a microservice-based workflow scheduler that executes tasks based on dates and conditional predicates, enabling
        automated and flexible orchestration of processes.
        Built an integrated Bot Store within the application, allowing users to browse and download bots contributed by open-source
        developers, fostering community-driven extensibility
        Problem solved the execution integrity in case of system crash while executing bot scripts, ensuring consistent state and
        quick recovery using a high level of journaling.`,
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Electron", "Microservices"],
    image: "/conductor.png",
    githubUrl: "https://github.com/rubaizmomin/Conductor",
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative">
      <div className="section-container">
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-4">
            <div className="accent-line" />
            <span className="text-primary font-medium tracking-widest uppercase text-sm">
              Projects
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-12">
            Featured work
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className="glass-card overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-3">
                    <a
                      href={project.liveUrl}
                      className="p-2 rounded-full bg-primary text-primary-foreground hover:scale-110 transition-transform"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="p-2 rounded-full bg-primary text-primary-foreground hover:scale-110 transition-transform"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
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
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
