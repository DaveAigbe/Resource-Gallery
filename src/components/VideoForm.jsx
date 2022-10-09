import React, { useContext, useState } from "react";
import { VideoContext } from "./VideoContext";

const VideoForm = () => {
  const [id, setId] = useState("");
  const [videos, setVideos] = useContext(VideoContext);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setVideos([id, ...videos]);
    setId("");
  };

  const handleInput = (e) => {
    setId(e.target.value);
  };

  return (
    <form
      className={"flex flex-col gap-4 justify-center items-center text-black"}
      onSubmit={(e) => handleFormSubmit(e)}
    >
      <input
        value={id}
        onChange={(e) => handleInput(e)}
        type="text"
        className={"bg-white p-4 rounded w-full md:w-96 h-14 "}
        placeholder={"ID"}
        minLength={11}
      />
      <button
        type={"submit"}
        className={
          "text-black bg-purple-300 rounded w-full md:w-96 h-14  hover:bg-purple-500 hover:animate-pulse hover:translate-y-0.5 hover:translate-x-0.5 shadow-lg shadow-purple-600 transition duration-300 ease-in-out font-bold"
        }
      >
        Save Video
      </button>
    </form>
  );
};

export default VideoForm;
