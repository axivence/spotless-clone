import santosLogo from "@/assets/santos-logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-4 md:p-6">
      <div className="flex items-center">
        <img 
          src={santosLogo} 
          alt="Santos King Tours & Travels" 
          className="h-12 md:h-16 w-auto"
        />
      </div>
    </header>
  );
};

export default Header;