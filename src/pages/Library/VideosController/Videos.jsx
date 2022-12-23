import React, { useContext } from "react";
import VideoThumbnail from "../Video/VideoThumbnail";
import { Context } from "../../../context/Context";

export const Videos = () => {
  const { videos, currentGenre } = useContext(Context);
  return (
    <>
      {videos[currentGenre].ids.map((id) => {
        return (
          <React.Fragment key={id}>
            <VideoThumbnail id={id} />
          </React.Fragment>
        );
      })}
    </>
  );
};
