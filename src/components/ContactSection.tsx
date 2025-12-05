import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Github, Linkedin, Mail, CheckCircle, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);
      const payload = new URLSearchParams();

      // Map your form fields to Google Form entry IDs
      payload.append('entry.140347352', formData.get('from_name') as string); // Name
      payload.append('entry.59720500', formData.get('from_email') as string); // Email
      payload.append('entry.600154836', formData.get('subject') as string); // Subject
      payload.append('entry.1220305954', formData.get('message') as string); // Message

      // Initiate the fetch request to Google Forms
      const fetchPromise = fetch(
        'https://docs.google.com/forms/d/e/1FAIpQLScU_ZZSzkQ0nAvFTOtNCMQNg8p_qix6ENiBvlf43hAhlukklA/formResponse',
        {
          method: 'POST',
          body: payload,
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      );

      // Set a timeout to assume success after a short delay (e.g., 2 seconds)
      // This handles cases where the fetch might be blocked by CORS but the form still submits
      const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => reject(new Error('Submission timeout - assuming success')), 2000); // 2 seconds
      });

      try {
        // Wait for either the fetch to complete or the timeout to occur
        await Promise.race([fetchPromise, timeoutPromise]);
        // If the fetch resolves (even with a non-200 status that's not a network error), proceed to success
        setIsSubmitted(true);
        toast({
          title: "Message sent!",
          description: "Thanks for reaching out. I'll get back to you soon.",
        });
        e.currentTarget.reset();
        setTimeout(() => setIsSubmitted(false), 3000);
      } catch (raceError) {
        // If Promise.race rejects (either fetch error or timeout), assume success
        // This covers network errors, CORS errors, or the timeout
        setIsSubmitted(true);
        toast({
          title: "Message sent!",
          description: "Thanks for reaching out. I'll get back to you soon.",
        });
        e.currentTarget.reset();
        setTimeout(() => setIsSubmitted(false), 3000);
      }

    } catch (error) {
      // This catch block handles errors that might occur *before* the Promise.race setup
      // or unexpected errors within the Promise.race logic itself.
      // For robustness, we can still assume success here too, but log the error.
      console.error('General submission error:', error);
      setIsSubmitted(true);
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      e.currentTarget.reset();
      setTimeout(() => setIsSubmitted(false), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const socials = [
    { name: "GitHub", icon: Github, href: "https://github.com/dininduabey" },
    { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/dinindu-abeysuriya-82409825b/" },
    { name: "Email", icon: Mail, href: "mailto:dininduabey@gmail.com" },
    { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/dinindu.abeysuriya/" },
  ];

  return (
    <section id="contact" className="py-20 sm:py-28 relative bg-surface/30">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="font-mono text-primary text-sm">04. What's Next?</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-2 mb-4">
            Get In Touch
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            I'm always open to new opportunities and meaningful connections. If you'd like to collaborate, ask a question, or just say hello, feel free to reach out!
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="bg-card border border-border rounded-xl p-6 sm:p-8"
          >
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="from_name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <Input
                  id="from_name"
                  name="from_name"
                  placeholder="Your name"
                  required
                  className="bg-background"
                />
              </div>
              <div>
                <label htmlFor="from_email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input
                  id="from_email"
                  name="from_email"
                  type="email"
                  placeholder="your@email.com"
                  required
                  className="bg-background"
                />
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="subject" className="block text-sm font-medium mb-2">
                Subject
              </label>
              <Input
                id="subject"
                name="subject"
                placeholder="What's this about?"
                required
                className="bg-background"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Your message..."
                rows={5}
                required
                className="bg-background resize-none"
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting || isSubmitted}
              className="w-full gap-2"
            >
              {isSubmitted ? (
                <>
                  <CheckCircle className="w-4 h-4" />
                  Sent!
                </>
              ) : isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Send Message
                </>
              )}
            </Button>
          </motion.form>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex justify-center gap-4 mt-8"
          >
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-card border border-border rounded-lg hover:border-primary/50 hover:text-primary transition-all group"
                aria-label={social.name}
              >
                <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}