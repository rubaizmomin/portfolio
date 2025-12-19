import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col items-start gap-1">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} rubaiz momin.
            </p>
            <a
              href="https://www.flaticon.com/free-icons/gemstone"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground text-xs opacity-60 hover:opacity-100 transition-opacity"
            >
              Favicon by Kason Koo - Flaticon
            </a>
          </div>
          
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/rubaizmomin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/rubaizmomin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
