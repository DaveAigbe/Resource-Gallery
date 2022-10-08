import React from "react";

const Video = ({ id }) => {
  return (
    <div>
      <iframe
        className={"rounded-2xl md:w-560 md:h-315"}
        src={`https://www.youtube.com/embed/${id}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Video;
