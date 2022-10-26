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
    <Header style="bg-header-texture bg-cover bg-no-repeat py-8">
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-2 py-12 gap-0 md:gap-x-10">
        <Container>
          <div className="md:translate-x-5%">
            <Image
              src="/assets/about/header-img.png"
              width={324}
              height={420}
            />
          </div>
          <div className="hidden md:block md:-translate-y-60% md:translate-x-45%">
            <Image
              src="/assets/about/header-img-2.png"
              width={220}
              height={285}
            />
          </div>
        </Container>
        <Container style="flex flex-col pt-12 gap-y-4">
          <Label text="About us" />
          <Title style="text-secondary-400 text-lg md:text-4xl leading-subtitle font-bold">
            Owner and investor with a <br className="hidden md:block" />{" "}
            reputation
          </Title>
          <Content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc{" "}
            <br className="hidden md:block" /> elit sem, vestibulum sed leo eu,
            malesuada pharetra mauris. <br className="hidden md:block" />
            Integer rhoncus, eros vel euismod tempor, ipsum magna{" "}
            <br className="hidden md:block" />
            tristique nisi, quis ullamcorper enim magna eu orci. Sed
            <br className="hidden md:block" /> semper ex quis semper aliquet.
            Cras hendrerit molestie sapien <br className="hidden md:block" />
            sed fermentum. Mauris dui tortor, viverra vel ultrices in,{" "}
            <br className="hidden md:block" />
            congue sed ex.
          </Content>
        </Container>
      </div>
    </Header>
  );
};

export default Hero;
