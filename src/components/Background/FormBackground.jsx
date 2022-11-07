export const FormBackground = ({ children }) => {
  return (
    <div
      className={
        "bg-gray-600/30 h-screen w-screen flex justify-center items-center fixed top-0 right-0 z-10"
      }
    >
      {children}
    </div>
  );
};
