import Link from "next/link";
const Services = () => {
  return (
    <div className="py-32 bg-secondary-200 flex flex-col space-y-10 items-center justify-center h-[60vh]">
      <p>Coming Soon...</p>
      <p>
        Click{" "}
        <Link href="/">
          <a className="uppercase text-secondary-400 text-xl">here</a>
        </Link>{" "}
        to go home
      </p>
    </div>
  );
};

export default Services;
