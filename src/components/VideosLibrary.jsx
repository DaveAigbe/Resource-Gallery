import React, { useContext } from "react";
import Video from "./Video";
import { VideoContext } from "./VideoContext";

const MyComponent = () => {
  const [videos] = useContext(VideoContext);

  return (
    <div className={"flex justify-center gap-6 flex-wrap max-w-8xl"}>
      {videos.map((video) => {
        return <Video id={video} />;
      })}
    </div>
  );
};

export default MyComponent;
