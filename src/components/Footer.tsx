import { Facebook, Instagram, Mail, MapPin, Clock, Award } from "lucide-react";
import footerBg from "@/assets/footer-bg.jpg";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-background text-foreground py-16 overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${footerBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/90 to-background/80 z-0" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-5 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-primary">Clean Pest Control</h3>
            <p className="text-foreground/70">
              Your trusted partner in pest-free living across Pune.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection("home")} className="text-foreground/70 hover:text-primary transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("about")} className="text-foreground/70 hover:text-primary transition-colors">
                  About
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("services")} className="text-foreground/70 hover:text-primary transition-colors">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("pricing")} className="text-foreground/70 hover:text-primary transition-colors">
                  Pricing
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-foreground/70">
              <li>8055337009</li>
              <li>8149710414</li>
              <li>cleanpestcontrol.pune@gmail.com</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Service Areas</h4>
            <ul className="space-y-2 text-foreground/70">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0 text-primary" />
                <span>Vishrantwadi, Pune</span>
              </li>
              <li>Kalas, Dhanori</li>
              <li>Yerawada, Viman Nagar</li>
              <li>& All Pune Areas</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Working Hours</h4>
            <ul className="space-y-2 text-foreground/70">
              <li className="flex items-start gap-2">
                <Clock className="h-4 w-4 mt-1 flex-shrink-0 text-primary" />
                <span>Mon - Sat: 8 AM - 8 PM</span>
              </li>
              <li>Sunday: 9 AM - 6 PM</li>
              <li className="flex items-start gap-2 mt-4 pt-4 border-t border-foreground/20">
                <Award className="h-4 w-4 mt-1 flex-shrink-0 text-secondary" />
                <span>Certified & Insured</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-foreground/70 text-center md:text-left">
              © 2025 Clean Pest Control. All Rights Reserved.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-foreground/60 text-sm">Follow Us:</span>
              <div className="flex space-x-3">
                <a href="#" className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-all hover:scale-110">
                  <Facebook className="h-5 w-5 text-primary" />
                </a>
                <a href="#" className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-all hover:scale-110">
                  <Instagram className="h-5 w-5 text-primary" />
                </a>
                <a href="mailto:cleanpestcontrol.pune@gmail.com" className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-all hover:scale-110">
                  <Mail className="h-5 w-5 text-primary" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
