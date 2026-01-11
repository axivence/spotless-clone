import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-backwaters.jpg";
import ceoPortrait from "@/assets/ceo-portrait.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-background/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Badge */}
        <div className="mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <span className="badge-primary">
            SANTOS.TRAVEL • KOCHI, KERALA
          </span>
        </div>

        {/* CEO Portrait */}
        <div className="mb-8 animate-scale-in" style={{ animationDelay: "0.2s" }}>
          <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-primary shadow-2xl animate-float">
            <img 
              src={ceoPortrait} 
              alt="Santhosh Thayil - CEO" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Title Badge */}
        <div className="mb-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <span className="badge-accent">Managing Director</span>
        </div>

        {/* Name */}
        <h1 
          className="text-5xl md:text-7xl font-heading font-bold text-foreground mb-4 animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          Santhosh Thayil
        </h1>

        {/* Subtitle */}
        <p 
          className="text-primary text-xl md:text-2xl font-medium mb-4 animate-fade-in lowercase"
          style={{ animationDelay: "0.5s" }}
        >
          <span className="capitalize">Managing Director,</span> santos.travel
        </p>

        {/* Credentials */}
        <p 
          className="text-muted-foreground text-sm md:text-base mb-8 animate-fade-in"
          style={{ animationDelay: "0.6s" }}
        >
          Govt of INDIA Approved Tour Operator • IATO • ATOAI • PATA • KTM • Dept of Tourism, Kerala
        </p>

        {/* Quote */}
        <blockquote 
          className="text-foreground/90 text-lg md:text-xl italic max-w-2xl mx-auto mb-16 animate-fade-in"
          style={{ animationDelay: "0.7s" }}
        >
          "Crafting soulful journeys across India and beyond, with a passionate team & modern vehicles"
        </blockquote>

        {/* Scroll Indicator */}
        <a 
          href="#about"
          className="inline-flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors animate-fade-in"
          style={{ animationDelay: "0.8s" }}
        >
          <span className="text-xs tracking-widest uppercase mb-2">Scroll</span>
          <ChevronDown className="w-5 h-5 animate-bounce-slow" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;