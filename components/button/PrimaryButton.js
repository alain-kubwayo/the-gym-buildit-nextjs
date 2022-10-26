const PrimaryButton = ({ style, text }) => {
  return (
    <button
      className={`text-white rounded-btn bg-secondary-500 py-2.5 px-6.5 w-full md:w-auto`}
    >
      {text}
    </button>
  );
};

export default PrimaryButton;
