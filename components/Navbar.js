import Image from "next/image";
import Link from "next/link";
import Button from "./button/Button";
import List from "./list/List";
import ListItem from "./list/ListItem";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between">
      <div>
        <Image src="/logo.png" width={200} height={80} />
      </div>
      <List style="flex space-x-4 text-base">
        <Link href="/about">
          <a>
            <ListItem style="text-secondary-300" content="About" />
          </a>
        </Link>
        <Link href="/services">
          <a>
            <ListItem style="text-secondary-300" content="Services" />
          </a>
        </Link>
        <Link href="/projects">
          <a>
            <ListItem style="text-secondary-300" content="Projects" />
          </a>
        </Link>
        <Link href="/contact">
          <a>
            <ListItem style="text-secondary-300" content="Contact" />
          </a>
        </Link>
      </List>
      <Button
        style="text-white rounded-btn bg-secondary-500 py-2.5 px-6.5"
        label="Need a Project?"
      />
    </nav>
  );
};

export default Navbar;
