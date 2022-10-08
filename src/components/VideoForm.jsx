import React from "react";

const VideoForm = () => {
  return (
    <form className={"flex flex-col gap-4 justify-center items-center"}>
      <input
        type="text"
        className={"bg-white p-4 rounded w-full md:w-96 h-14 "}
        placeholder={"ID"}
      />
      <button
        onClick={(e) => e.preventDefault()}
        className={
          "bg-purple-300 rounded w-full md:w-96 h-14  hover:bg-purple-500 hover:animate-pulse hover:translate-y-0.5 hover:translate-x-0.5 shadow-lg shadow-purple-600 transition duration-300 ease-in-out font-bold"
        }
      >
        Save Video
      </button>
    </form>
  );
};

export default VideoForm;
