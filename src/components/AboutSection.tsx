import { motion } from "framer-motion";
import { Shield, Search, Database, Code, Cloud, Terminal, Lock, Cpu } from "lucide-react";

const skills = [
  { name: "Threat Analysis", icon: Search },
  { name: "SIEM (Splunk, ELK)", icon: Database },
  { name: "Network Security", icon: Shield },
  { name: "Python", icon: Code },
  { name: "SQL", icon: Terminal },
  { name: "AWS", icon: Cloud },
  { name: "Offensive Security", icon: Lock },
  { name: "Defensive Security", icon: Cpu },
];

const timeline = [
  { year: "2024", title: "Certifications", description: "Holds cybersecurity certifications from Google, NYU, and University of Moratuwa." },
  { year: "2023", title: "Started practicing labs on THM & Hack The Box", description: "Practiced cybersecurity skills with hands-on labs on TryHackMe and Hack The Box." },
  { year: "2022", title: "Started Cybersecurity Degree at SLTC", description: "Specializing in system security and vulnerability assessment" },
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-28 relative">
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
            <span className="font-mono text-primary text-sm">03.</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
              About Me
            </h2>
            <div className="flex-1 h-px bg-border hidden sm:block" />
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-4">
                I'm a <span className="text-foreground font-medium">Cybersecurity Undergraduate</span> passionate 
                about protecting digital assets and building secure systems. My areas of interest include threat detection, 
                secure system design, and cloud security.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I believe in a <span className="text-foreground font-medium">proactive approach</span> to security—identifying 
                vulnerabilities before they become breaches. Through continuous learning, hands-on projects, and real-world labs, I stay ahead of emerging threats and modern defense strategies.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not exploring security concepts, analyzing malware, or practicing system hardening, I sometimes deepen my understanding by reading technical articles, researching emerging threats, and staying up to date with the latest cybersecurity news, trends, and defensive strategies.
              </p>
            </div>

            {/* Skills Grid */}
            <div className="mt-8">
              <h3 className="font-mono text-sm text-primary mb-4">{"// Skills & Tools"}</h3>
              <div className="grid grid-cols-2 gap-3">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="flex items-center gap-2 p-2.5 bg-surface rounded-lg border border-border hover:border-primary/30 transition-colors group"
                  >
                    <skill.icon className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                    <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="font-mono text-sm text-primary mb-6">{"// Journey"}</h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />

              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="relative pl-8"
                  >
                    {/* Dot */}
                    <div className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full bg-background border-2 border-primary" />
                    
                    <div className="bg-card border border-border rounded-lg p-4 hover:border-primary/30 transition-colors">
                      <span className="font-mono text-xs text-primary">{item.year}</span>
                      <h4 className="font-semibold text-foreground mt-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-4">
              {[
                { value: "10+", label: "Projects" },
                { value: "15+", label: "Certifications" },
                { value: "3+", label: "Years Learning" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                  className="text-center p-4 bg-surface rounded-lg border border-border"
                >
                  <div className="font-mono text-2xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
