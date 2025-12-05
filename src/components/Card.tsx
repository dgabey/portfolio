import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { cn } from "@/lib/utils";

interface Project {
  id: string;
  title: string;
  image: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
}

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  image: string;
  date: string;
  link: string;
}

interface CardProps {
  item: Project | Certificate;
  type: "project" | "certificate";
}

export function Card({ item, type }: CardProps) {
  const isProject = type === "project";
  const project = item as Project;
  const certificate = item as Certificate;

  const handleClick = () => {
    if (isProject) {
      const link = project.demo || project.github;
      if (link) window.open(link, "_blank", "noopener,noreferrer");
    } else {
      window.open(certificate.link, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <motion.article
      whileHover={{ scale: 1.08, zIndex: 10 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      onClick={handleClick}
      className={cn(
        "group relative flex flex-col h-full cursor-pointer",
        "bg-card border border-border rounded-xl overflow-visible", // 👈 Ensure rounded corners
        "transition-all duration-300 origin-center",
        "hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10"
      )}
      style={{ transformOrigin: "center center" }}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && handleClick()}
    >
      {/* Image */}
      <div className="relative aspect-video bg-muted overflow-hidden rounded-t-xl"> {/* 👈 Rounded top corners */}
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4 sm:p-5 pt-4 rounded-b-xl"> {/* 👈 Rounded bottom corners */}
        {/* Title & Badge */}
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-mono font-semibold text-sm sm:text-base line-clamp-2 group-hover:text-primary transition-colors">
            {item.title}
          </h3>
          {isProject && (project.demo || project.github) && (
            <ExternalLink className="w-4 h-4 flex-shrink-0 text-muted-foreground group-hover:text-primary transition-colors" />
          )}
        </div>

        {/* Description or Issuer */}
        {isProject ? (
          <p className="text-muted-foreground text-xs sm:text-sm line-clamp-2 mb-3 flex-1">
            {project.description}
          </p>
        ) : (
          <div className="mb-3 flex-1">
            <p className="text-muted-foreground text-xs sm:text-sm">{certificate.issuer}</p>
            <p className="text-muted-foreground/70 text-xs">{certificate.date}</p>
          </div>
        )}

        {/* Tech Stack or View Link */}
        {isProject ? (
          <div className="flex flex-wrap gap-1.5">
            {project.tech.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 text-[10px] sm:text-xs font-mono bg-surface text-muted-foreground rounded border border-border"
              >
                {tech}
              </span>
            ))}
          </div>
        ) : (
          <span className="text-xs text-primary font-mono group-hover:underline">
            View Certificate →
          </span>
        )}

        {/* GitHub icon for projects */}
        {isProject && project.github && (
          <div className="mt-3 pt-3 border-t border-border flex items-center gap-2">
            <Github className="w-3.5 h-3.5 text-muted-foreground" />
            <span className="text-xs text-muted-foreground truncate">
              {project.github.replace("https://github.com/  ", "")}
            </span>
          </div>
        )}
      </div>

      {/* Glow effect on hover — replaced with clean border/shadow */}
      <div className="absolute inset-0 rounded-xl border-2 border-transparent opacity-0 group-hover:opacity-100 group-hover:border-primary/50 transition-opacity duration-300 pointer-events-none" />
    </motion.article>
  );
}