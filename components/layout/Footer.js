import Image from "next/image";
import List from "../list/List";
import ListItem from "../list/ListItem";

const Footer = () => {
  return (
    <footer className=" text-secondary-100 bg-secondary-400 py-20">
      <div className="w-[1280px] max-w-[80%] mx-auto">
        <div className="grid grid-cols-1 space-y-20 md:space-y-0 md:grid-cols-3 lg:grid-cols-4">
          <div>
            <div className="flex flex-col justify-between h-full">
              <div className="space-y-3">
                <h2 className="font-bold text-2xl">Buildit</h2>
                <p>Development company, {new Date().getFullYear()}</p>
              </div>
              <p>
                Site design - <span className="underline">⏰ Alarm</span>
              </p>
            </div>
          </div>
          <div>
            <div className="flex flex-col justify-between space-y-10">
              <List style="space-y-3">
                <ListItem content="Service 1" />
                <ListItem content="Service 2" />
                <ListItem content="Service 3" />
                <ListItem content="Service 4" />
              </List>
              <div className="flex gap-x-4">
                <Image src="/instagram-icon.svg" width={40} height={40} />
                <Image src="/facebook-icon.svg" width={40} height={40} />
              </div>
            </div>
          </div>
          <List style="space-y-3">
            <ListItem content="About us" />
            <ListItem content="Services" />
            <ListItem content="Projects" />
            <ListItem content="Contact" />
          </List>
          <div>
            <div className="flex flex-col justify-between h-full">
              <List style="space-y-3">
                <ListItem content="Get in touch" />
                <ListItem content="60 Manor Station St. Fairport," />
                <ListItem content="NY 14450" />
              </List>
              <List style="space-y-3">
                <ListItem content="708-790-0000" />
                <ListItem content="sales@buildit.site" />
              </List>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
