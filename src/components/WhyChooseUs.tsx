import { CheckCircle, Target, DollarSign, Users, TrendingUp } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <CheckCircle className="w-8 h-8 text-primary" />,
      title: "Proven Track Record",
      description: "Over 5+ years of delivering exceptional results for businesses across various industries. Our portfolio speaks for itself with documented success stories and measurable ROI."
    },
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "Tailored Strategies",
      description: "We don't believe in one-size-fits-all solutions. Every strategy is customized to your specific business goals, target audience, and industry requirements."
    },
    {
      icon: <DollarSign className="w-8 h-8 text-primary" />,
      title: "Affordable Pricing",
      description: "Professional-grade digital marketing services at competitive rates. We offer flexible packages that provide maximum value for your investment."
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Expert Team",
      description: "Our certified digital marketing professionals stay current with industry trends and best practices to deliver cutting-edge solutions."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      title: "Measurable Results",
      description: "We focus on KPIs that matter to your business. Regular reporting and analytics ensure transparency and continuous improvement."
    }
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose Prosperity Prosales</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We combine industry expertise with personalized service to deliver digital marketing 
            solutions that drive real business growth and sustainable success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="card-hover bg-white p-8 rounded-xl border border-border text-center">
              <div className="flex justify-center mb-6">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{reason.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-primary text-primary-foreground rounded-2xl p-12 text-center">
          <h3 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h3>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of satisfied clients who have experienced significant growth with our proven strategies.
          </p>
          <button 
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-white text-primary hover:bg-white/90 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
          >
            Start Your Journey Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;