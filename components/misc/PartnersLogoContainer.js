import Image from "next/image";

const PartnersLogoContainer = ({ src, width, height }) => {
  return <Image src={src} width={width} height={height} />;
};

export default PartnersLogoContainer;
