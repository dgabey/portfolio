import { Shield } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo & Copyright */}
          <div className="flex items-center gap-2 text-muted-foreground">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm font-mono">
              © {currentYear} Dinindu Abeysuriya
            </span>
          </div>

          {/* Built with */}
          <p className="text-xs text-muted-foreground font-mono">
            Built with <span className="text-primary">React</span> + <span className="text-primary">TypeScript</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
