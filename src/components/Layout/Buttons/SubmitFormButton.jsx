export const SubmitFormButton = ({ text }) => {
  return (
    <button
      className={
        "text-white rounded bg-purple-600 p-2 px-3 font-bold shadow-md tracking-wide transition ease-in-out hover:bg-purple-700"
      }
      type={"submit"}
    >
      {text}
    </button>
  );
};
