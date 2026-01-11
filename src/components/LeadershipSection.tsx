import { Briefcase, Mountain, Trophy } from "lucide-react";

const positions = [
  {
    icon: Briefcase,
    role: "Managing Director",
    company: "santos.travel",
    description: "Leading a Government of India recognized tour company specializing in experiential Kerala tourism."
  },
  {
    icon: Mountain,
    role: "Adventure Tourism Pioneer",
    company: "Cycling, Kayaking & Trekking",
    description: "Pioneering adventure experiences across South India, including cycling tours, kayaking expeditions, treks & wilderness camps."
  },
  {
    icon: Trophy,
    role: "Event Organizer",
    company: "Kochi Swimathon & Duskathon, Tour de Kerala",
    description: "Organizing major sporting events that bring together adventure enthusiasts and promote active lifestyles."
  }
];

const LeadershipSection = () => {
  return (
    <section className="py-20 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="section-label">Leadership</span>
          <h2 className="section-title">Positions of Influence</h2>
        </div>

        {/* Positions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {positions.map((position, index) => (
            <div key={index} className="leadership-card">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <position.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="text-primary text-sm font-medium mb-2">{position.role}</p>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                {position.company}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {position.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
