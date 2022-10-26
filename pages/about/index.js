import Head from "next/head";
// Section imports
import Hero from "../../components/sections/about/Hero";
import Statistics from "../../components/sections/about/Statistics";
import Team from "../../components/sections/about/Team";

const About = () => {
  return (
    <>
      <Head>
        <title>Buildit | About</title>
      </Head>
      <Hero />
      <Statistics />
      <Team />
    </>
  );
};

export default About;
