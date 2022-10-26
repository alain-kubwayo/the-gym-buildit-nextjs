import Subtitle from "../../headings/Subtitle";
import Card from "../../misc/Card";

const Innovation = () => {
  return (
    <section className="bg-secondary-100 py-36">
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
    </section>
  );
};

export default Innovation;
