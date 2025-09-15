import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/prosperity-logo.png" 
              alt="Prosperity Prosales Logo" 
              className="h-12 w-12"
            />
            <div className="font-bold text-2xl text-primary">
              Prosperity Prosales
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection("home")} className="nav-link">
              Home
            </button>
            <button onClick={() => scrollToSection("about")} className="nav-link">
              About
            </button>
            <button onClick={() => scrollToSection("services")} className="nav-link">
              Services
            </button>
            <button onClick={() => scrollToSection("team")} className="nav-link">
              Team
            </button>
            <button onClick={() => scrollToSection("contact")} className="nav-link">
              Contact
            </button>
          </nav>

          {/* Phone Number & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <a 
              href="tel:+2349063384027" 
              className="hidden lg:flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors"
            >
              <Phone size={20} />
              <span className="font-medium">+234 906 338 4027</span>
            </a>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection("home")} className="nav-link text-left">
                Home
              </button>
              <button onClick={() => scrollToSection("about")} className="nav-link text-left">
                About
              </button>
              <button onClick={() => scrollToSection("services")} className="nav-link text-left">
                Services
              </button>
              <button onClick={() => scrollToSection("team")} className="nav-link text-left">
                Team
              </button>
              <button onClick={() => scrollToSection("contact")} className="nav-link text-left">
                Contact
              </button>
              <a 
                href="tel:+2349063384027" 
                className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors"
              >
                <Phone size={20} />
                <span className="font-medium">+234 906 338 4027</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;