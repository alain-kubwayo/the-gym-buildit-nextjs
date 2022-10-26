// Component imports
import Label from "../../headings/Label";
import Subtitle from "../../headings/Subtitle";
import StatsCard from "../../misc/StatsCard";
import PartnersLogoContainer from "../../misc/PartnersLogoContainer";

const stats = [
  {
    src: "/assets/about/stats-icon-1.svg",
    width: "70",
    height: "70",
    title: ">200",
    label: "Number",
  },
  {
    src: "/assets/about/stats-icon-2.svg",
    width: "70",
    height: "70",
    title: ">70",
    label: "Number",
  },
  {
    src: "/assets/about/stats-icon-3.svg",
    width: "70",
    height: "70",
    title: ">20",
    label: "Number",
  },
];

const logos = [
  {
    src: "/assets/home/partners-logo-1.png",
    width: "51.06",
    height: "40",
  },
  {
    src: "/assets/home/partners-logo-2.png",
    width: "60",
    height: "40",
  },
  {
    src: "/assets/home/partners-logo-3.png",
    width: "217.17",
    height: "40",
  },
  {
    src: "/assets/home/partners-logo-4.png",
    width: "78",
    height: "30",
  },
  {
    src: "/assets/home/partners-logo-5.png",
    width: "94.61",
    height: "45",
  },
];

const Statistics = () => {
  return (
    <section className="bg-secondary-100 py-20">
      <div className="w-[1280px] max-w-[80%] mx-auto flex flex-col space-y-6">
        <Label
          style="text-secondary-600 text-base text-center"
          text="Statistics"
        />
        <Subtitle
          style="text-secondary-400 text-4xl text-center font-semibold"
          description="Development in numbers"
        />
        <div className="flex flex-col gap-y-10 md:gap-y-0 md:flex-row justify-between bg-secondary-200 py-8 px-10 w-full md:w-2/3 mx-auto">
          {stats.map((stat, i) => (
            <StatsCard
              key={i}
              src={stat.src}
              width={stat.width}
              height={stat.height}
              title={stat.title}
              label={stat.label}
            />
          ))}
        </div>
        <div className="flex justify-center gap-x-8 py-10 border-t border-secondary-300 border-b">
          {logos.map((logo, i) => (
            <PartnersLogoContainer
              key={i}
              src={logo.src}
              width={logo.width}
              height={logo.height}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
