import Image from "next/image";

const TeamCard = ({ src }) => {
  return (
    <div className="bg-secondary-200 shadow-2xl">
      <img src={src} className="w-full" />
      <div className="p-4">
        <p className="font-bold text-secondary-400 text-base">Name Surname</p>
        <p className="text-secondary-300 text-base">Worker</p>
      </div>
    </div>
  );
};

export default TeamCard;
