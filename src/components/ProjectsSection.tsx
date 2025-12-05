import { motion } from "framer-motion";
import { Carousel } from "./Carousel";
import projects from "@/data/projects.json";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 sm:py-28 relative">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 sm:mb-14"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-primary text-sm">01.</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
              Projects
            </h2>
            <div className="flex-1 h-px bg-border hidden sm:block" />
          </div>
          <p className="text-muted-foreground max-w-2xl">
            A collection of security tools, research projects, and applications I've built.
            Click on any project to view the source code or live demo.
          </p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Carousel items={projects} type="project" />
        </motion.div>

        {/* Hint */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-xs text-muted-foreground mt-6 font-mono"
        >
          {"<"} Drag or swipe to explore more projects {"/>"}
        </motion.p>
      </div>
    </section>
  );
}