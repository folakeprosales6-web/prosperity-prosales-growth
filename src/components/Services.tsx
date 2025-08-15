import socialMediaImage from "@/assets/service-social-media.jpg";
import seoImage from "@/assets/service-seo.jpg";
import googleBusinessImage from "@/assets/service-google-business.jpg";
import ecommerceImage from "@/assets/service-ecommerce.jpg";
import webDesignImage from "@/assets/service-web-design.jpg";

const Services = () => {
  const services = [
    {
      title: "Social Media Marketing",
      image: socialMediaImage,
      description: "Comprehensive social media strategies across all major platforms. We create engaging content, manage your online presence, and run targeted advertising campaigns that drive engagement and conversions.",
      features: ["Content Creation", "Community Management", "Paid Advertising", "Analytics & Reporting"]
    },
    {
      title: "SEO Optimization",
      image: seoImage,
      description: "Boost your search engine rankings with our proven SEO techniques. We optimize your website for better visibility, increased organic traffic, and higher conversion rates.",
      features: ["Keyword Research", "On-Page Optimization", "Technical SEO", "Link Building"]
    },
    {
      title: "Google Business Profile Growth",
      image: googleBusinessImage,
      description: "Maximize your local presence with optimized Google Business Profile management. We help you attract more local customers and improve your online reputation.",
      features: ["Profile Optimization", "Review Management", "Local SEO", "Customer Engagement"]
    },
    {
      title: "eCommerce Marketing",
      image: ecommerceImage,
      description: "Comprehensive eCommerce solutions that drive sales and growth. From product optimization to conversion rate improvement, we help your online store succeed.",
      features: ["Product Optimization", "Conversion Optimization", "Email Marketing", "Retargeting Campaigns"]
    },
    {
      title: "Website Design & Development",
      image: webDesignImage,
      description: "Professional, responsive websites that convert visitors into customers. We create modern, user-friendly designs optimized for performance and search engines.",
      features: ["Responsive Design", "SEO Optimization", "Performance Optimization", "CMS Integration"]
    }
  ];

  return (
    <section id="services" className="section bg-muted">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We offer comprehensive digital marketing solutions tailored to your business needs. 
            Our expert team delivers results-driven strategies that grow your online presence.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="mb-6 overflow-hidden rounded-lg">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2 text-left">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button 
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-primary text-lg"
          >
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;