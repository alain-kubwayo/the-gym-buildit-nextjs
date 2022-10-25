import Image from "next/image";
import Container from "./Container";
import Title from "./headings/Title";
import Navbar from "./Navbar";
import Content from "./Content";
import Button from "./button/Button";

const Header = ({ style, children }) => {
  return (
    <header className={style}>
      <div className="w-[1280px] max-w-[80%] mx-auto">{children}</div>
    </header>
  );
};

export default Header;
