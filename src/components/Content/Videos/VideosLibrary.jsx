import React, { useContext } from "react";
import VideoThumbnail from "./VideoThumbnail";
import { Context } from "../../../context/Context";

const MyComponent = () => {
  const { videos, currentCategory } = useContext(Context);

  return (
    <section className={"flex justify-center gap-6 flex-wrap max-w-8xl"}>
      {videos[currentCategory].ids.map((id) => {
        return (
          <React.Fragment key={id}>
            <VideoThumbnail id={id} />
          </React.Fragment>
        );
      })}
    </section>
  );
};

export default MyComponent;
