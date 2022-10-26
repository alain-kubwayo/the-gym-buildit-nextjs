import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

// Component imports
import Button from "../button/Button";
import PrimaryButton from "../button/PrimaryButton";
import List from "../list/List";
import ListItem from "../list/ListItem";

const Navbar = () => {
  const router = useRouter();
  return (
    <nav className="flex flex-col space-y-8 md:spacey-y-0 md:flex-row md:items-center md:justify-between">
      <Link href="/" className="cursor-pointer">
        <a>
          <Image src="/logo.png" width={200} height={80} />
        </a>
      </Link>
      <List style="flex space-x-4 text-base">
        <Link href="/about">
          <a
            className={
              router.pathname == "/about"
                ? "bg-secondary-500 text-white px-2 py-1 rounded"
                : "text-secondary-300"
            }
          >
            <ListItem content="About" />
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
      <PrimaryButton text="Need a Project?" />
      {/* <Button
        style="text-white rounded-btn bg-secondary-500 py-2.5 px-6.5"
        label="Need a Project?"
      /> */}
    </nav>
  );
};

export default Navbar;
