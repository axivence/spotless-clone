const achievements = [
  {
    number: "17+",
    title: "Years of Excellence",
    description: "Pioneering experiential tourism from Kochi, Kerala"
  },
  {
    number: "10K+",
    title: "Happy Travelers",
    description: "Creating memorable adventures across Kerala & India"
  },
  {
    number: "9+",
    title: "Major Events",
    description: "Swimathon, Duskathon, Paddlers Meetup & Tour de Kerala organizer"
  },
  {
    number: "7",
    title: "Accreditations",
    description: "IATO, ATOAI, PATA & Govt. of India recognized"
  }
];

const AchievementsSection = () => {
  return (
    <section className="py-20 md:py-32 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="section-label">Achievements</span>
          <h2 className="section-title">Milestones of Excellence</h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className="glass-card text-center hover:scale-105 transition-transform duration-300"
            >
              <div className="stat-number mb-2">{achievement.number}</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {achievement.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
