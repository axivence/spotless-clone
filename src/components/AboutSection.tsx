const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="section-label">About</span>
          <h2 className="section-title">A Visionary in Indian Tourism</h2>
        </div>

        {/* Content */}
        <div className="glass-card space-y-6 text-muted-foreground leading-relaxed">
          <p>
            Santhosh Thayil is the visionary leader behind Santos King Tours & Travels, a Kochi-based travel company that has redefined experiential tourism in Kerala. His passion for adventure and deep connection to Kerala's natural beauty drives every journey the company curates.
          </p>
          
          <p>
            As a Government of India recognized tour operator and active member of IATO, ATOAI, and PATA, Santhosh has represented India at international travel marts including the prestigious Himalayan Travel Mart as a Global Buyer delegate.
          </p>
          
          <p>
            Beyond tourism, he's a community builder—organizing major sporting events like the Kochi Swimathon and Kochi Duskathon, bringing together adventure enthusiasts and promoting Kerala's vibrant culture.
          </p>
          
          <p>
            Your trusted, professional travel partner in South India, since 2009 delivering unique, cultural, ethnic products and quality travel services filled with the real flavours of South India.
          </p>
          
          <p>
            We are Government of India, Ministry of Tourism accredited "Adventure Tour Operator" and "Inbound Tour Operator" based in Kochi, Kerala. We have our own fleets, high-end geared bicycles, tuk-tuks, adventure gear and more... <span className="text-foreground font-semibold">Let's Grow Together!</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;