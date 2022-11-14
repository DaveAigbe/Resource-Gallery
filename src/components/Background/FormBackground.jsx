export const FormBackground = ({ children, closeForm }) => {
  return (
    <div
      className={
        "h-screen w-screen flex justify-center items-center fixed top-0 left-0 z-10"
      }
    >
      <div
        className={"fixed bg-gray-600/50 h-screen w-screen z-20"}
        id={"background"}
        onClick={closeForm}
      ></div>
      <div className={"relative z-30"} id={"content"}>
        {children}
      </div>
    </div>
  );
};
