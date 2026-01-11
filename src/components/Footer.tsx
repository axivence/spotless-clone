import santosLogo from "@/assets/santos-logo.png";

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center gap-6">
          <img 
            src={santosLogo} 
            alt="Santos King Tours & Travels" 
            className="h-16 md:h-20 w-auto"
          />
          <p className="text-muted-foreground text-sm text-center">
            © {new Date().getFullYear()} Santos King Tours & Travels Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;