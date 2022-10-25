import Button from "./button/Button";

const Form = () => {
  return (
    <form className="text-secondary-400 p-4 space-y-6 bg-secondary-200 shadow-2xl rounded-btn">
      <div className="flex space-x-4">
        <div className="flex flex-col w-1/2">
          <label>Name</label>
          <input
            type="text"
            className="rounded-sm-half border border-secondary-400 py-3"
          />
        </div>
        <div className="flex flex-col w-1/2">
          <label>Email</label>
          <input
            type="text"
            className="rounded-sm-half border border-secondary-400 py-3"
          />
        </div>
      </div>

      <div className="flex flex-col">
        <label>Subject</label>
        <input
          type="text"
          className="rounded-sm-half border border-secondary-400 py-3"
        />
      </div>
      <div className="flex flex-col">
        <label>Subject</label>
        <textarea
          rows="5"
          className="rounded-sm-half border border-secondary-400 py-3"
        ></textarea>
      </div>

      <Button
        style="text-white rounded-btn bg-secondary-500 py-2.5 px-6.5 w-full"
        label="Send message"
      />
    </form>
  );
};

export default Form;
