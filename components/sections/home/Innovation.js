// Component imports
import Subtitle from "../../headings/Subtitle";
import Card from "../../misc/Card";

const innovationCards = [
  {
    src: "/assets/home/innovation-icon-1.svg",
    title: "Featured Listing",
  },
  {
    src: "/assets/home/innovation-icon-2.png",
    title: "Available Properties",
  },
  {
    src: "/assets/home/innovation-icon-3.png",
    title: "In the News",
  },
];

const Innovation = () => {
  return (
    <section className="bg-secondary-100 py-36">
      <div className="w-[1280px] max-w-[80%] mx-auto">
        <Subtitle
          style="text-secondary-400 md:text-center text-4xl pb-10"
          description="Innovative Execution"
        />
        <div className="p-0 md:p-5 grid grid-cols-1 gap-y-10 md:gap-y-0 md:space-y-0 md:grid-cols-3 gap-x-0 md:gap-x-4">
          {innovationCards.map((card, i) => (
            <Card
              key={i}
              width="70"
              height="70"
              src={card.src}
              title={card.title}
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Innovation;
