const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">About Prosperity Prosales</h2>
          
          <div className="text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed">
            <p className="mb-6">
              For over 5 years, Prosperity Prosales has been at the forefront of digital transformation, 
              helping businesses across various industries achieve unprecedented online growth. Our mission 
              is simple yet powerful: to empower brands with cutting-edge digital marketing strategies 
              that drive real, measurable results.
            </p>
            
            <p className="mb-6">
              We believe that every business, regardless of size, deserves access to professional-grade 
              digital marketing services. Our team of certified experts specializes in social media marketing, 
              SEO optimization, eCommerce store growth, and lead generation strategies that convert.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
              <p className="text-muted-foreground mb-8">
                To bridge the gap between traditional business practices and modern digital marketing, 
                ensuring our clients not only survive but thrive in the digital marketplace. We are 
                committed to delivering strategies that are both innovative and practical.
              </p>

              <h3 className="text-2xl font-bold mb-6">Our Vision</h3>
              <p className="text-muted-foreground">
                To become the leading digital marketing agency in Africa, known for our integrity, 
                innovation, and unwavering commitment to client success. We envision a future where 
                every business has the tools and knowledge to succeed online.
              </p>
            </div>

            <div className="bg-muted p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6">Our Expertise</h3>
              <ul className="space-y-4 text-left">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span><strong>Social Media Marketing:</strong> Comprehensive strategies across all major platforms</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span><strong>SEO Optimization:</strong> Proven techniques for organic growth and visibility</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span><strong>eCommerce Growth:</strong> End-to-end solutions for online store success</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span><strong>Lead Generation:</strong> Targeted campaigns that convert prospects into customers</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;