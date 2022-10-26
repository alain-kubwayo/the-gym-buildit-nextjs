import Image from "next/image";
// Component imports
import Header from "../../misc/Header";
import Navbar from "../../misc/Navbar";
import Container from "../../misc/Container";
import Label from "../../headings/Label";
import Title from "../../headings/Title";
import Content from "../../misc/Content";

const Hero = () => {
  return (
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc <br />{" "}
            elit sem, vestibulum sed leo eu, malesuada pharetra mauris. <br />
            Integer rhoncus, eros vel euismod tempor, ipsum magna <br />
            tristique nisi, quis ullamcorper enim magna eu orci. Sed
            <br /> semper ex quis semper aliquet. Cras hendrerit molestie sapien{" "}
            <br />
            sed fermentum. Mauris dui tortor, viverra vel ultrices in, <br />
            congue sed ex.
          </Content>
        </Container>
      </div>
    </Header>
  );
};

export default Hero;
