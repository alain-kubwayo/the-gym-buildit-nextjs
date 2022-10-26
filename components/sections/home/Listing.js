import Container from "../../misc/Container";
import Label from "../../headings/Label";
import Title from "../../headings/Title";
import Content from "../../misc/Content";
import Button from "../../button/Button";

const Listing = () => {
  return (
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
              <br /> elit sem, vestibulum sed leo eu, malesuada pharetra mauris.{" "}
              <br />
              Integer rhoncus, eros vel euismod tempor, ipsum magna <br />
              tristique nisi, quis ullamcorper enim magna eu orci. Sed
              <br /> semper ex quis semper aliquet. Cras hendrerit molestie
              sapien <br />
              sed fermentum. Mauris dui tortor, viverra vel ultrices in, <br />
              congue sed ex.
            </Content>
            <div className="w-1/3">
              <Button
                style="text-white rounded-btn bg-secondary-500 py-2.5 px-6.5 w-full"
                label="Explore"
              />
            </div>
          </Container>
          <Container>
            <div className="flex w-full gap-[30px] h-[591px]">
              <div className="flex flex-col  gap-[30px] self-end">
                <div className="pt-[30px]">
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
              <div className="flex flex-col gap-[30px] grow">
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
