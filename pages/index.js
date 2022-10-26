import Head from "next/head";

// Section imports
import Hero from "../components/sections/home/Hero";
import Innovation from "../components/sections/home/Innovation";
import Investors from "../components/sections/home/Investors";
import Listing from "../components/sections/home/Listing";
import Socials from "../components/sections/home/Socials";
import Contact from "../components/sections/home/Contact";

export default function Home() {
  return (
    <>
      <Head>
        <title>Buildit | Home</title>
      </Head>
      {/* Hero section */}
      <Hero />
      {/* Innovation section */}
      <Innovation />
      {/* Investors section */}
      <Investors />
      {/* Listing section */}
      <Listing />
      {/* Socials section */}
      <Socials />
      {/* Contact section */}
      <Contact />
    </>
  );
}
