import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-digital-marketing.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Digital Marketing Analytics Dashboard" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Boost Your Sales & 
            <span className="block">Online Visibility</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl leading-relaxed">
            Transform your business with proven digital marketing strategies. 
            We help brands grow through targeted social media marketing, SEO optimization, 
            and eCommerce solutions that deliver real results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              onClick={scrollToContact}
              className="btn-primary text-lg px-10 py-6"
            >
              Let's Get Started
            </Button>
            <Button 
              variant="outline" 
              className="btn-outline text-white border-white hover:bg-white hover:text-black text-lg px-10 py-6"
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
            >
              Our Services
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-16 bg-white/30 rounded-full flex justify-center">
          <div className="w-1 h-8 bg-white rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;