import { Phone, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Prosperity Prosales</h3>
            <p className="mb-6 leading-relaxed opacity-90">
              Your trusted partner in digital marketing success. We help businesses grow their 
              online presence through proven strategies and innovative solutions.
            </p>
            
            <div className="space-y-3">
              <a 
                href="tel:+2349063384027" 
                className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
              >
                <Phone size={20} />
                <span>+234 906 338 4027</span>
              </a>
              <a 
                href="mailto:info@prosperityprosales.com" 
                className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
              >
                <Mail size={20} />
                <span>info@prosperityprosales.com</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection("home")}
                  className="hover:opacity-80 transition-opacity"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("about")}
                  className="hover:opacity-80 transition-opacity"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("services")}
                  className="hover:opacity-80 transition-opacity"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("team")}
                  className="hover:opacity-80 transition-opacity"
                >
                  Our Team
                </button>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="space-y-3">
              <a 
                href="https://web.facebook.com/profile.php?id=61579034938004&sk=about_details" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block hover:opacity-80 transition-opacity"
              >
                Facebook
              </a>
              <a 
                href="https://x.com/Prosperity25371" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block hover:opacity-80 transition-opacity"
              >
                Twitter/X
              </a>
              <a 
                href="https://www.pinterest.com/Prosperity_Prosales/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block hover:opacity-80 transition-opacity"
              >
                Pinterest
              </a>
              <a 
                href="https://www.instagram.com/prosperityprosales/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block hover:opacity-80 transition-opacity"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="opacity-80">
              © {currentYear} Prosperity Prosales. All rights reserved.
            </p>
            
            <div className="mt-4 md:mt-0">
              <button 
                onClick={() => scrollToSection("contact")}
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
              >
                Get Started Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;