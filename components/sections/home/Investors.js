import Image from "next/image";
// Component imports
import PartnersLogoContainer from "../../misc/PartnersLogoContainer";
import Container from "../../misc/Container";
import Label from "../../headings/Label";
import Title from "../../headings/Title";
import Content from "../../misc/Content";
import PrimaryButton from "../../button/PrimaryButton";

const Investors = () => {
  return (
    <section className="bg-secondary-50 pt-10">
      <div className="w-[1280px] max-w-[80%] mx-auto">
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
        <div className="grid grid-cols-1 md:grid-cols-2 py-20 gap-x-10 justify-center px-10">
          <Container style="flex justify-center items-center">
            <div>
              <Image src="/assets/home/tower.png" width={500} height={375} />
            </div>
          </Container>
          <Container style="flex flex-col justify-center gap-y-8">
            <Label style="text-secondary-600" text="About us" />
            <Title style="text-secondary-400 text-lg md:text-4xl leading-1 md:leading-subtitle font-bold">
              Owner and investor with a <br className="hidden md:block" />
              reputation
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
            <div className="w-full md:w-1/3">
              <PrimaryButton text="Explore" />
            </div>
          </Container>
        </div>
      </div>
    </section>
  );
};

export default Investors;
