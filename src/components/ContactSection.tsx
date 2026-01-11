import { Phone, Mail, Globe, MapPin, Linkedin, Facebook, Instagram, Twitter } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 8089084080",
    href: "tel:+918089084080"
  },
  {
    icon: Mail,
    label: "Email",
    value: "sales@santos.travel",
    href: "mailto:sales@santos.travel"
  },
  {
    icon: Globe,
    label: "Website",
    value: "santos.travel",
    href: "https://santos.travel/"
  },
  {
    icon: MapPin,
    label: "Headquarters",
    value: "Aluva, Kochi, Kerala",
    href: "https://goo.gl/maps/Hq6wTUDVSNfavN9z8"
  }
];

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" }
];

const ContactSection = () => {
  return (
    <section className="py-20 md:py-32 px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="section-label">Get in Touch</span>
          <h2 className="section-title">Let's Create Your Journey</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Ready to explore the world? Reach out and start planning your next adventure.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {contactInfo.map((item, index) => (
            <a 
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-muted-foreground text-sm mb-1">{item.label}</p>
                <p className="text-foreground font-medium">{item.value}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Social Media */}
        <div className="text-center">
          <p className="text-muted-foreground text-sm mb-6">Connect on Social Media</p>
          <div className="flex justify-center gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="social-icon"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;