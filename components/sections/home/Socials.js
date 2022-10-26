import Image from "next/image";
// Component imports
import Label from "../../headings/Label";
import Subtitle from "../../headings/Subtitle";

const images = [
  "/assets/home/socials-image-2.png",
  "/assets/home/socials-image-2.png",
  "/assets/home/socials-image-3.png",
  "/assets/home/socials-image-4.png",
  "/assets/home/socials-image-5.png",
  "/assets/home/socials-image-6.png",
];

const Socials = () => {
  return (
    <section className="bg-secondary-50 pt-32 pb-20">
      <div className="w-[1280px] max-w-[80%] mx-auto flex flex-col space-y-6 px-10">
        <Label style="text-center" text="Socials" />
        <Subtitle
          style="text-secondary-400 text-4xl text-center font-semibold"
          description="On Instagram"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {images.map((src, i) => (
            <Image key={i} src={src} width={328} height={278} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Socials;
