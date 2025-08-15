import ceoImage from "/lovable-uploads/7f5bff18-41c6-42d1-9181-225e927fec77.png";
import teamMember1 from "@/assets/team-member-1.jpg";
import teamMember2 from "@/assets/team-member-2.jpg";
import teamMember3 from "@/assets/team-member-3.jpg";

const Team = () => {
  const teamMembers = [
    {
      name: "Prosperity Okpara",
      role: "CEO & Founder",
      image: ceoImage,
      description: "Visionary leader with 5+ years of digital marketing expertise. Specializes in strategic planning and client relationship management."
    },
    {
      name: "David Adebayo",
      role: "Digital Marketing Manager",
      image: teamMember1,
      description: "Expert in social media marketing and paid advertising campaigns. Passionate about driving measurable results for our clients."
    },
    {
      name: "Grace Nwankwo",
      role: "SEO Specialist",
      image: teamMember2,
      description: "SEO expert with proven track record of improving organic rankings. Focuses on technical SEO and content optimization strategies."
    },
    {
      name: "Emmanuel Okafor",
      role: "Web Developer",
      image: teamMember3,
      description: "Full-stack developer specializing in responsive web design and e-commerce solutions. Creates websites that convert visitors into customers."
    }
  ];

  return (
    <section id="team" className="section">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Meet Our Expert Team</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our team of certified professionals brings together diverse expertise in digital marketing, 
            web development, and business strategy to deliver exceptional results for our clients.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-primary font-medium mb-4">{member.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4">Want to Work With Our Team?</h3>
          <p className="text-muted-foreground mb-8">
            Our experts are ready to help you achieve your digital marketing goals.
          </p>
          <button 
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-primary text-lg"
          >
            Schedule a Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Team;