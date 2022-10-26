import Image from "next/image";

const ContactDetail = ({ src, width, height, tag, children }) => {
  return (
    <div className="flex gap-x-4 items-center">
      <Image src={src} width={width} height={height} />
      <div>
        <p className="text-base text-secondary-400">{tag}</p>
        <p className="font-semibold text-xl text-secondary-400">{children}</p>
      </div>
    </div>
  );
};

export default ContactDetail;
