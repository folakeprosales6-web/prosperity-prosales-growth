import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel";
import heroImage from "@/assets/hero-digital-marketing.jpg";

const Hero = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const heroSlides = [
    {
      title: "Boost Your Sales & Online Visibility",
      subtitle: "Transform your business with proven digital marketing strategies",
      description: "We help brands grow through targeted social media marketing, SEO optimization, and eCommerce solutions that deliver real results.",
    },
    {
      title: "Social Media Marketing Excellence",
      subtitle: "Engage your audience and drive conversions",
      description: "Professional social media strategies that increase brand awareness, engagement, and drive qualified leads to your business.",
    },
    {
      title: "SEO & Google Business Growth",
      subtitle: "Dominate search results and local listings",
      description: "Proven SEO techniques and Google Business Profile optimization that puts your business at the top of search results.",
    },
    {
      title: "eCommerce Solutions That Convert",
      subtitle: "Turn visitors into loyal customers",
      description: "Complete eCommerce marketing strategies including store optimization, conversion rate improvement, and sales funnel development.",
    },
  ];

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });

    // Auto-scroll every 5 seconds
    const interval = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Digital Marketing Analytics Dashboard" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10">
        <Carousel setApi={setApi} className="w-full max-w-4xl">
          <CarouselContent>
            {heroSlides.map((slide, index) => (
              <CarouselItem key={index}>
                <div className="max-w-4xl">
                  <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
                    {slide.title}
                  </h1>
                  
                  <h2 className="text-2xl md:text-3xl text-white/90 mb-6 font-semibold">
                    {slide.subtitle}
                  </h2>
                  
                  <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl leading-relaxed">
                    {slide.description}
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
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4 text-white border-white hover:bg-white hover:text-black" />
          <CarouselNext className="right-4 text-white border-white hover:bg-white hover:text-black" />
        </Carousel>

        {/* Slide indicators */}
        <div className="flex justify-center mt-8 gap-2">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === current - 1 ? "bg-white" : "bg-white/30"
              }`}
              onClick={() => api?.scrollTo(index)}
            />
          ))}
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