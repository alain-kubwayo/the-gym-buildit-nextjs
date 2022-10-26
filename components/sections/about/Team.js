// Component imports
import Label from "../../headings/Label";
import Subtitle from "../../headings/Subtitle";
import TeamCard from "../../misc/TeamCard";
import Button from "../../button/Button";

const Team = () => {
  return (
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
  );
};

export default Team;
