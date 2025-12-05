import { motion } from "framer-motion";
import { Carousel } from "./Carousel";
import certificates from "@/data/certificates.json";

export function CertificatesSection() {
  return (
    <section id="certificates" className="py-20 sm:py-28 relative bg-surface/30">
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
            <span className="font-mono text-primary text-sm">02.</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
              Certificates
            </h2>
            <div className="flex-1 h-px bg-border hidden sm:block" />
          </div>
          <p className="text-muted-foreground max-w-2xl">
            Professional certifications and courses I've completed to validate my cybersecurity expertise.
          </p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Carousel items={certificates} type="certificate" />
        </motion.div>

        {/* Hint */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-xs text-muted-foreground mt-6 font-mono"
        >
          {"<"} Click to verify credentials {"/>"}
        </motion.p>
      </div>
    </section>
  );
}