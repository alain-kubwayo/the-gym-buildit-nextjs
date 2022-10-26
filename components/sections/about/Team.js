// Component imports
import Label from "../../headings/Label";
import Subtitle from "../../headings/Subtitle";
import TeamCard from "../../misc/TeamCard";
import Button from "../../button/Button";

const images = [
  "/assets/about/member-1.png",
  "/assets/about/member-2.png",
  "/assets/about/member-3.png",
  "/assets/about/member-4.png",
  "/assets/about/member-5.png",
  "/assets/about/member-6.png",
  "/assets/about/member-7.png",
  "/assets/about/member-8.png",
  "/assets/about/member-9.png",
];

const Team = () => {
  return (
    <section className="bg-secondary-150 py-32">
      <div className="w-[1280px] max-w-[80%] mx-auto flex flex-col space-y-6">
        <Label style="text-center" text="Our team" />
        <Subtitle
          style="text-secondary-400 text-4xl text-center font-semibold"
          description="Let's meet"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 px-0 md:px-20 py-10">
          {images.map((image, i) => (
            <TeamCard key={i} src={image} />
          ))}
        </div>
        <div className="flex flex-col space-y-10 md:space-y-0 md:flex-row justify-between gap-x-8 py-10 border-t border-secondary-300 border-b">
          <Subtitle
            style="text-secondary-400 text-4xl font-semibold w-full md:w-1/2 text-center md:text-left"
            description="Call us"
          />
          <div className="w-full md:w-1/2 flex justify-end space-x-6">
            <Button
              style="text-white rounded-btn bg-secondary-500 py-2.5 px-6.5 w-1/2 md:w-1/3"
              label="Call"
            />
            <Button
              style="text-secondary-400 rounded-btn bg-secondary-200 py-2.5 px-6.5 w-1/2 md:w-1/3"
              label="Email"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
