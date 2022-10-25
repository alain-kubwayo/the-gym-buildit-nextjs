import Image from "next/image";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Container from "../../components/Container";
import Title from "../../components/headings/Title";
import Content from "../../components/Content";
import Button from "../../components/button/Button";
import Label from "../../components/headings/Label";
import PartnersLogoContainer from "../../components/PartnersLogoContainer";
import Subtitle from "../../components/headings/Subtitle";
import StatsCard from "../../components/StatsCard";
import TeamCard from "../../components/TeamCard";

const About = () => {
  return (
    <div>
      <Header style="bg-header-texture bg-cover bg-no-repeat">
        <Navbar />
        <div className="grid grid-cols-1 md:grid-cols-2 py-12 gap-x-10">
          <Container style="h-[70vh]">
            <div className="translate-x-[5%]">
              <Image
                src="/assets/about/header-img.png"
                width={324}
                height={420}
              />
            </div>
            <div className="-translate-y-[60%] translate-x-[45%]">
              <Image
                src="/assets/about/header-img-2.png"
                width={220}
                height={285}
              />
            </div>
          </Container>
          <Container style="flex flex-col justify-center gap-y-4">
            <Label style="text-secondary-600" text="About us" />
            <Title style="text-secondary-400 text-4xl leading-subtitle font-bold">
              Owner and investor with a <br /> reputation
            </Title>
            <Content>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc{" "}
              <br /> elit sem, vestibulum sed leo eu, malesuada pharetra mauris.{" "}
              <br />
              Integer rhoncus, eros vel euismod tempor, ipsum magna <br />
              tristique nisi, quis ullamcorper enim magna eu orci. Sed
              <br /> semper ex quis semper aliquet. Cras hendrerit molestie
              sapien <br />
              sed fermentum. Mauris dui tortor, viverra vel ultrices in, <br />
              congue sed ex.
            </Content>
          </Container>
        </div>
      </Header>

      <section className="bg-secondary-100 pt-32 pb-20">
        <div className="w-[1280px] max-w-[80%] mx-auto flex flex-col space-y-6">
          <Label
            style="text-secondary-600 text-base text-center"
            text="Statistics"
          />
          <Subtitle
            style="text-secondary-400 text-4xl text-center font-semibold"
            description="Development in numbers"
          />
          <div className="flex flex-col md:flex-row justify-between bg-secondary-200 py-8 px-10 w-2/3 mx-auto">
            <StatsCard
              src="/assets/about/stats-icon-1.svg"
              width="70"
              height="70"
              title=">200"
              label="Number"
            />
            <StatsCard
              src="/assets/about/stats-icon-2.svg"
              width="70"
              height="70"
              title=">70"
              label="Number"
            />
            <StatsCard
              src="/assets/about/stats-icon-3.svg"
              width="70"
              height="70"
              title=">20"
              label="Number"
            />
          </div>
          <div className="flex justify-center gap-x-8 py-10 border-t border-secondary-300 border-b">
            <PartnersLogoContainer
              src="/assets/home/partners-logo-1.png"
              width="51.06"
              height="43.17"
            />
            <PartnersLogoContainer
              src="/assets/home/partners-logo-2.png"
              width="60"
              height="40"
            />
            <PartnersLogoContainer
              src="/assets/home/partners-logo-3.png"
              width="217.17"
              height="40"
            />
            <PartnersLogoContainer
              src="/assets/home/partners-logo-4.png"
              width="78"
              height="30"
            />
            <PartnersLogoContainer
              src="/assets/home/partners-logo-5.png"
              width="94.61"
              height="45"
            />
          </div>
        </div>
      </section>

      <section className="bg-secondary-150 py-32">
        <div className="w-[1280px] max-w-[80%] mx-auto flex flex-col space-y-6">
          <Label
            style="text-secondary-600 text-base text-center"
            text="Our team"
          />
          <Subtitle
            style="text-secondary-400 text-4xl text-center font-semibold"
            description="Let's meet"
          />
          <div className="grid grid-cols-3 gap-10 px-20 py-10">
            <TeamCard src="/assets/about/member-1.png" />
            <TeamCard src="/assets/about/member-2.png" />
            <TeamCard src="/assets/about/member-3.png" />
            <TeamCard src="/assets/about/member-4.png" />
            <TeamCard src="/assets/about/member-5.png" />
            <TeamCard src="/assets/about/member-6.png" />
            <TeamCard src="/assets/about/member-7.png" />
            <TeamCard src="/assets/about/member-8.png" />
            <TeamCard src="/assets/about/member-9.png" />
          </div>
          <div className="flex justify-between gap-x-8 py-10 border-t border-secondary-300 border-b">
            <Subtitle
              style="text-secondary-400 text-4xl font-semibold w-1/2"
              description="Call us"
            />
            <div className="w-1/2 flex justify-end space-x-6">
              <Button
                style="text-white rounded-btn bg-secondary-500 py-2.5 px-6.5 w-1/3"
                label="Call"
              />
              <Button
                style="text-secondary-400 rounded-btn bg-secondary-200 py-2.5 px-6.5 w-1/3"
                label="Email"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
