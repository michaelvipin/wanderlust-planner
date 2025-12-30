import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const openWhatsApp = () => {
    window.open("https://wa.me/919876543210?text=Hi, I'm interested in booking a travel package.", "_blank");
  };

  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      <div className="container-custom section-padding">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-display font-bold mb-4">
              Wanderlust<span className="text-secondary">Travels</span>
            </h3>
            <p className="text-primary-foreground/70 mb-6 max-w-md">
              Your trusted travel partner for creating unforgettable journeys. We specialize in personalized travel experiences for families, couples, and groups.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-secondary/20 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-secondary/20 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-secondary/20 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-secondary/20 transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#plans" className="text-primary-foreground/70 hover:text-secondary transition-colors">
                  Travel Plans
                </a>
              </li>
              <li>
                <a href="#services" className="text-primary-foreground/70 hover:text-secondary transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#why-us" className="text-primary-foreground/70 hover:text-secondary transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#enquiry" className="text-primary-foreground/70 hover:text-secondary transition-colors">
                  Get a Quote
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-secondary mt-0.5" />
                <div>
                  <a href="tel:+919876543210" className="hover:text-secondary transition-colors">
                    +91 98765 43210
                  </a>
                  <button
                    onClick={openWhatsApp}
                    className="block text-sm text-secondary hover:underline mt-1"
                  >
                    Chat on WhatsApp
                  </button>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-secondary mt-0.5" />
                <a href="mailto:hello@wanderlusttravels.com" className="hover:text-secondary transition-colors">
                  hello@wanderlusttravels.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-secondary mt-0.5" />
                <span className="text-primary-foreground/70">
                  123 Travel Plaza, MG Road<br />
                  Mumbai, Maharashtra 400001
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © {currentYear} WanderlustTravels. All rights reserved. | Made with ❤️ for travelers
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
