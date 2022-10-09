import React from "react";

const Video = ({ id }) => {
  return (
    <iframe
      className={
        "rounded-2xl w-full h-full md:w-330 md:h-186 my-md:w-380 my-md:h-214 lg:w-460 lg:h-259 my-lg:w-560 my-lg:h-315"
      }
      src={`https://www.youtube.com/embed/${id}`}
      title="YouTube video player"
      allowFullScreen={true}
    ></iframe>
  );
};

export default Video;

// "rounded-2xl md:w-330 md:h-186 my-md:w-380 my-md:h-214 lg:w-460 lg:h-259 my-lg:w-560 my-lg:h-315"
