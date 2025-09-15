import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      business: "E-commerce Fashion Store",
      rating: 5,
      text: "Prosperity Prosales transformed our online presence completely. Our social media engagement increased by 300% and our online sales tripled within 6 months. Their team is professional, responsive, and truly understands digital marketing.",
      result: "300% increase in engagement"
    },
    {
      name: "Michael Chen",
      business: "Tech Startup",
      rating: 5,
      text: "Working with Prosperity Prosales was a game-changer for our startup. Their SEO expertise helped us rank #1 for our target keywords, and their comprehensive digital strategy boosted our lead generation significantly.",
      result: "Ranked #1 for target keywords"
    },
    {
      name: "Aisha Okoye",
      business: "Local Restaurant Chain",
      rating: 5,
      text: "The team at Prosperity Prosales helped us establish a strong local presence. Our Google Business Profile optimization brought in 40% more foot traffic, and their social media campaigns increased our brand awareness tremendously.",
      result: "40% increase in foot traffic"
    }
  ];

  const renderStars = (rating: number) => {
    return Array(rating).fill(0).map((_, index) => (
      <Star key={index} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
    ));
  };

  return (
    <section className="section bg-muted">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">What Our Clients Say</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say 
            about their experience working with Prosperity Prosales.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg card-hover border border-border">
              <div className="flex items-center justify-between mb-6">
                <div className="flex space-x-1">
                  {renderStars(testimonial.rating)}
                </div>
                <Quote className="w-8 h-8 text-primary opacity-20" />
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              
              <div className="border-t border-border pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-lg">{testimonial.name}</h4>
                    <p className="text-muted-foreground text-sm">{testimonial.business}</p>
                  </div>
                  <div className="text-right">
                    <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                      {testimonial.result}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold mb-4">Ready to Join Our Success Stories?</h3>
          <p className="text-muted-foreground mb-8">
            Let us help you achieve similar results and grow your business online.
          </p>
          <button 
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-primary text-lg"
          >
            Get Your Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;