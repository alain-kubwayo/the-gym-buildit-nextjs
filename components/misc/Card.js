import Image from "next/image";

const Card = ({ src, width, height, title, description }) => {
  return (
    <div className="p-0 md:p-12.5 space-y-4">
      <Image src={`${src}`} width={width} height={height} />
      <h1 className="text-secondary-400 text-2xl">{title}</h1>
      <p className="text-secondary-300 text-base">{description}</p>
    </div>
  );
};

export default Card;
