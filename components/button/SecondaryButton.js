const SecondaryButton = ({ text }) => {
  return (
    <button className=" text-secondary-400 rounded-btn bg-secondary-200 py-2.5 px-6.5 w-full md:w-auto">
      {text}
    </button>
  );
};

export default SecondaryButton;
