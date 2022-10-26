import Image from "next/image";
// Component imports
import Header from "../../misc/Header";
import Navbar from "../../misc/Navbar";
import Container from "../../misc/Container";
import Title from "../../headings/Title";
import Content from "../../misc/Content";
import Button from "../../button/Button";
import PrimaryButton from "../../button/PrimaryButton";
import SecondaryButton from "../../button/SecondaryButton";

const Hero = () => {
  return (
    <Header style="bg-home-header-texture bg-cover py-8">
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-2 py-10 gap-x-6">
        <Container style="flex flex-col justify-center gap-y-20">
          <div>
            <Title style="text-lg md:text-6.5xl font-bold text-secondary-400 leading-title">
              Development <br className="hidden md:block" />
              Company
            </Title>
            <Content>
              Forward-thinking real estate developer, owner <br /> and investor
              with a reputation
            </Content>
          </div>
          <div className="space-x-0 space-y-8 md:space-y-0 md:space-x-3">
            <PrimaryButton text="Services" />
            <SecondaryButton text="About the company" />
          </div>
        </Container>
        <Container style="space-y-10">
          <div className="flex justify-between items-end gap-x-10">
            <Image src="/header-img-1.png" width={160.61} height={159.89} />
            <Image src="/header-img-2.png" width={249.46} height={248.33} />
            <Image src="/header-img-3.png" width={128.69} height={128.11} />
          </div>
          <div className="flex justify-between items-start -translate-x-[7%] gap-x-10">
            <Image src="/header-img-4.png" width={342.92} height={342.46} />
            <Image src="/header-img-5.png" width={209.44} height={208.49} />
          </div>
        </Container>
      </div>
    </Header>
  );
};

export default Hero;
