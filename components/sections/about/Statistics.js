// Component imports
import Label from "../../headings/Label";
import Subtitle from "../../headings/Subtitle";
import StatsCard from "../../misc/StatsCard";
import PartnersLogoContainer from "../../misc/PartnersLogoContainer";

const Statistics = () => {
  return (
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
  );
};

export default Statistics;
