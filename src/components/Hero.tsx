import { motion } from "framer-motion";
import { Github, Download, Mail, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getImagePath } from "@/lib/utils";

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden cyber-grid"
    >
      {/* Background Effects */}
<div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
<div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 pt-20 md:pt-0">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-72 lg:h-72 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 p-1">
              <div className="w-full h-full rounded-full bg-muted flex items-center justify-center overflow-hidden">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img 
                    src={getImagePath("/use.jpg")} 
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Decorative ring */}
            <div className="absolute inset-0 rounded-full border border-primary/20 animate-pulse" />
          </motion.div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="font-mono text-primary text-sm sm:text-base mb-2">
                {">"} Hello, I'm
              </p>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            >
              Dinindu{" "}
              <span className="gradient-text">Abeysuriya</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3 mb-6"
            >
              {[
                "Cybersecurity Undergraduate",
                "Security Researcher",
                "Developer",
              ].map((title) => (
                <span
                  key={title}
                  className="px-3 py-1 text-xs sm:text-sm font-mono bg-surface rounded-full text-muted-foreground border border-border"
                >
                  {title}
                </span>
              ))}
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto lg:mx-0 mb-8"
            >
              Cybersecurity Undergraduate focused on{" "}
              <span className="text-foreground font-medium">Threat Detection</span>,{" "}
              <span className="text-foreground font-medium">Secure System Design</span> &{" "}
              <span className="text-foreground font-medium">Continuous Learning</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4"
            >
              {/* Download CV Button */}
              <Button className="gap-2 glow-sm" asChild>
                <a
                  // href="https://drive.google.com/file/d/1Ir6gSzfiPA8QQJS5Nl5JQkY7homXd-Y8/view?usp=sharing"
                  href="https://drive.google.com/uc?export=download&id=1Ir6gSzfiPA8QQJS5Nl5JQkY7homXd-Y8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="w-4 h-4" />
                  Download CV
                </a>
              </Button>

              {/* GitHub Button */}
              <Button variant="outline" className="gap-2" asChild>
                <a
                  href="https://github.com/dininduabey"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              </Button>

              {/* Contact Button */}
              <Button variant="ghost" className="gap-2" asChild>
                <a href="mailto:dininduabey@gmail.com">
                  <Mail className="w-4 h-4" />
                  Contact
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a
          href="#projects"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-xs font-mono">Scroll</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
}