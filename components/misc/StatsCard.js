import Image from "next/image";
// Component imports
import Subtitle from "../headings/Subtitle";

const StatsCard = ({ src, title, width, height, label }) => {
  return (
    <div className="flex items-center gap-x-8">
      <Image src={src} width={width} height={height} />
      <div>
        <Subtitle
          style="text-secondary-400 text-4xl text-center font-semibold"
          description={title}
        />
        <p className="text-secondary-300 text-base">{label}</p>
      </div>
    </div>
  );
};

export default StatsCard;
