const Header = ({ style, children }) => {
  return (
    <header className={style}>
      <div className="w-[1280px] max-w-[80%] mx-auto">{children}</div>
    </header>
  );
};

export default Header;
