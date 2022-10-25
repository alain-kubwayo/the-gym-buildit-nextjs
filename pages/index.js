import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Container from "../components/Container";
import Title from "../components/headings/Title";
import Content from "../components/Content";
import Button from "../components/button/Button";
import Subtitle from "../components/headings/Subtitle";
import Card from "../components/Card";
import PartnersLogoContainer from "../components/PartnersLogoContainer";
import Label from "../components/headings/Label";
import ContactDetail from "../components/ContactDetail";
import Form from "../components/Form";

export default function Home() {
  return (
    <>
      <Header style="bg-home-header-texture bg-cover py-8">
        <Navbar />
        <div className="grid grid-cols-1 md:grid-cols-2 py-10 gap-x-6">
          <Container style="flex flex-col justify-center gap-y-20">
            <div>
              <Title style="text-6.5xl font-bold text-secondary-400 leading-title">
                Development <br />
                Company
              </Title>
              <Content>
                Forward-thinking real estate developer, owner <br /> and
                investor with a reputation
              </Content>
            </div>
            <div className="space-x-3">
              <Button
                style="text-white rounded-btn bg-secondary-500 py-2.5 px-6.5"
                label="Services"
              />
              <Button
                style="text-secondary-400 rounded-btn bg-secondary-200 py-2.5 px-6.5"
                label="About the company"
              />
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
      <div className="bg-secondary-100 py-36">
        <div className="w-[1280px] max-w-[80%] mx-auto">
          <Subtitle
            style="text-secondary-400 text-center text-4xl pb-10"
            description="Innovative Execution"
          />
          <div className="p-5 grid grid-cols-1 md:grid-cols-3 gap-x-4">
            <Card
              width="70"
              height="70"
              src="/assets/home/innovation-icon-1.svg"
              title="Featured Listing"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
            <Card
              width="70"
              height="70"
              src="/assets/home/innovation-icon-2.png"
              title="Available Properties"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
            <Card
              width="70"
              height="70"
              src="/assets/home/innovation-icon-3.png"
              title="In the News"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          </div>
        </div>
      </div>

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
              <Title style="text-secondary-400 text-4xl leading-subtitle font-bold">
                Owner and investor with a <br /> reputation
              </Title>
              <Content>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc{" "}
                <br /> elit sem, vestibulum sed leo eu, malesuada pharetra
                mauris. <br />
                Integer rhoncus, eros vel euismod tempor, ipsum magna <br />
                tristique nisi, quis ullamcorper enim magna eu orci. Sed
                <br /> semper ex quis semper aliquet. Cras hendrerit molestie
                sapien <br />
                sed fermentum. Mauris dui tortor, viverra vel ultrices in,{" "}
                <br />
                congue sed ex.
              </Content>
              <div className="w-1/3">
                <Button
                  style="text-white rounded-btn bg-secondary-500 py-2.5 px-6.5 w-full"
                  label="Explore"
                />
              </div>
            </Container>
          </div>
        </div>
      </section>

      <section className="bg-secondary-100 py-32">
        <div className="w-[1280px] max-w-[80%] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 py-20 gap-x-10 justify-center px-10">
            <Container style="flex flex-col justify-center gap-y-8">
              <Label style="text-secondary-600" text="Available Properties" />
              <Title style="text-secondary-400 text-4xl leading-subtitle font-bold">
                Featured Listing
              </Title>
              <Content>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc{" "}
                <br /> elit sem, vestibulum sed leo eu, malesuada pharetra
                mauris. <br />
                Integer rhoncus, eros vel euismod tempor, ipsum magna <br />
                tristique nisi, quis ullamcorper enim magna eu orci. Sed
                <br /> semper ex quis semper aliquet. Cras hendrerit molestie
                sapien <br />
                sed fermentum. Mauris dui tortor, viverra vel ultrices in,{" "}
                <br />
                congue sed ex.
              </Content>
              <div className="w-1/3">
                <Button
                  style="text-white rounded-btn bg-secondary-500 py-2.5 px-6.5 w-full"
                  label="Explore"
                />
              </div>
            </Container>
            <Container style="flex justify-center items-center">
              <div className="flex w-full h-[70vh]">
                <div className="flex items-end">
                  <div>
                    <Image
                      src="/assets/home/listing-house-1.png"
                      width={232}
                      height={205}
                    />
                    <Image
                      src="/assets/home/listing-house-3.png"
                      width={194}
                      height={260}
                    />
                  </div>
                </div>
                <div>
                  <Image
                    src="/assets/home/listing-house-2.png"
                    width={243}
                    height={331}
                  />
                  <Image
                    src="/assets/home/listing-house-4.png"
                    width={215}
                    height={135}
                  />
                </div>
              </div>
            </Container>
          </div>
        </div>
      </section>

      <section className="bg-secondary-50 pt-32 pb-20">
        <div className="w-[1280px] max-w-[80%] mx-auto flex flex-col space-y-6">
          <Label
            style="text-secondary-600 text-base text-center"
            text="Socials"
          />
          <Subtitle
            style="text-secondary-400 text-4xl text-center font-semibold"
            description="On Instagram"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Image
              src="/assets/home/socials-image-1.png"
              width={328}
              height={278}
            />
            <Image
              src="/assets/home/socials-image-2.png"
              width={328}
              height={278}
            />
            <Image
              src="/assets/home/socials-image-3.png"
              width={328}
              height={278}
            />
            <Image
              src="/assets/home/socials-image-4.png"
              width={328}
              height={278}
            />
            <Image
              src="/assets/home/socials-image-5.png"
              width={328}
              height={278}
            />
            <Image
              src="/assets/home/socials-image-6.png"
              width={328}
              height={278}
            />
          </div>
        </div>
      </section>
      <section className="bg-secondary-100 py-32">
        <div className="w-[1280px] max-w-[80%] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div>
              <div className="flex flex-col justify-between h-full">
                <div className="space-y-3">
                  <Label style="text-secondary-600 text-base" text="Contact" />
                  <Subtitle
                    style="text-secondary-400 text-4xl font-semibold"
                    description="Get In Touch"
                  />
                </div>

                <div className="space-y-3">
                  <ContactDetail
                    src="/assets/home/form-icon-1.svg"
                    width={70}
                    height={70}
                    tag="Tel"
                    detail="708-790-0000"
                  />
                  <ContactDetail
                    src="/assets/home/form-icon-2.svg"
                    width={70}
                    height={70}
                    tag="Email"
                    detail="sales@buildit.site"
                  />
                  <ContactDetail
                    src="/assets/home/form-icon-2.svg"
                    width={70}
                    height={70}
                    tag="Office"
                    detail="60 Manor Station St.
                Fairport, NY 14450"
                  />
                </div>
              </div>
            </div>
            <div>
              <Form />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
