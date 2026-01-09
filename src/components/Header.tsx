import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${scrolled ? "bg-white shadow-md" : "bg-transparent"}
      `}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <span
              className={`text-xl md:text-2xl font-display font-bold transition-colors
                ${scrolled ? "text-primary" : "text-white"}
              `}
            >
              Wanderra
              <span className={scrolled ? "text-secondary" : "text-yellow-400"}>
                &Co
              </span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 text-white">
            {["plans", "services", "why-us", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`font-medium transition-colors
                  ${scrolled
                    ? "text-gray-700 hover:text-primary"
                    : "text-white/80 hover:text-white"}
                `}
              >
                {item.replace("-", " ").toUpperCase()}
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+916369665703"
              className={`flex items-center gap-2 font-medium transition-colors
                ${scrolled ? "text-primary" : "text-white"}
              `}
            >
              <Phone className="h-4 w-4" />
              +91 6369665703
            </a>

            <Button variant="accent" onClick={() => scrollToSection("enquiry")}>
              Enquire Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 transition-colors
              ${scrolled ? "text-gray-800" : "text-white"}
            `}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border bg-white">
            <div className="flex flex-col gap-4">
              {["plans", "services", "why-us", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-gray-700 hover:text-primary font-medium py-2"
                >
                  {item.replace("-", " ").toUpperCase()}
                </button>
              ))}
              <Button variant="accent" onClick={() => scrollToSection("enquiry")}>
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
