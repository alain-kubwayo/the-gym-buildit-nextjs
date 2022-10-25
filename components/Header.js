import Navbar from "./Navbar";

const Header = ({ children }) => {
  return (
    <header className="bg-home-header-texture bg-cover py-8">
      <div className="w-[1280px] max-w-[80%] mx-auto">{children}</div>
    </header>
  );
};

export default Header;
