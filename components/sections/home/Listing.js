// Component imports
import Container from "../../misc/Container";
import Label from "../../headings/Label";
import Title from "../../headings/Title";
import Content from "../../misc/Content";
import PrimaryButton from "../../button/PrimaryButton";

const Listing = () => {
  return (
    <section className="bg-secondary-100 py-32">
      <div className="w-[1280px] max-w-[80%] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 py-20 gap-y-12 md:gap-y-0 gap-x-10 justify-center px-10">
          <Container style="flex flex-col justify-center gap-y-8">
            <Label text="Available Properties" />
            <Title style="text-secondary-400 text-lg md:text-4xl leading-subtitle font-bold">
              Featured Listing
            </Title>
            <Content>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc{" "}
              <br className="hidden md:block" /> elit sem, vestibulum sed leo
              eu, malesuada pharetra mauris. <br className="hidden md:block" />
              Integer rhoncus, eros vel euismod tempor, ipsum magna{" "}
              <br className="hidden md:block" />
              tristique nisi, quis ullamcorper enim magna eu orci. Sed
              <br className="hidden md:block" /> semper ex quis semper aliquet.
              Cras hendrerit molestie sapien <br className="hidden md:block" />
              sed fermentum. Mauris dui tortor, viverra vel ultrices in,{" "}
              <br className="hidden md:block" />
              congue sed ex.
            </Content>
            <div className="w-full md:w-1/3">
              <PrimaryButton text="Explore" />
            </div>
          </Container>
          <Container>
            <div className="md:flex w-full gap-7.5 h-591px">
              <div className="flex flex-row md:flex-col gap-7.5 self-end">
                <div className="pt-7.5">
                  <img
                    src="/assets/home/listing-house-1.png"
                    width={232}
                    height={205}
                  />
                </div>

                <img
                  src="/assets/home/listing-house-3.png"
                  width={194}
                  height={260}
                  className="self-end"
                />
              </div>
              <div className="flex flex-col gap-7.5 grow">
                <div className="w-full ">
                  <img
                    src="/assets/home/listing-house-2.png"
                    className="w-full"
                    height={331}
                  />
                </div>
                <img
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
  );
};

export default Listing;
