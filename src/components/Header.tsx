import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <span className="text-xl md:text-2xl font-display font-bold text-primary">
              Wanderra<span className="text-secondary">&Co</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("plans")}
              className="text-foreground/80 hover:text-primary transition-colors font-medium"
            >
              Travel Plans
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-foreground/80 hover:text-primary transition-colors font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("why-us")}
              className="text-foreground/80 hover:text-primary transition-colors font-medium"
            >
              Why Us
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground/80 hover:text-primary transition-colors font-medium"
            >
              Contact
            </button>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+916369665703" className="flex items-center gap-2 text-primary font-medium">
              <Phone className="h-4 w-4" />
              +91 6369665703
            </a>
            <Button variant="accent" onClick={() => scrollToSection("enquiry")}>
              Enquire Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("plans")}
                className="text-foreground/80 hover:text-primary transition-colors font-medium py-2"
              >
                Travel Plans
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-foreground/80 hover:text-primary transition-colors font-medium py-2"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("why-us")}
                className="text-foreground/80 hover:text-primary transition-colors font-medium py-2"
              >
                Why Us
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-foreground/80 hover:text-primary transition-colors font-medium py-2"
              >
                Contact
              </button>
              <Button variant="accent" onClick={() => scrollToSection("enquiry")} className="mt-2">
                Enquire Now
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
