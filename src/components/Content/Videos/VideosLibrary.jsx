import React, { useContext } from "react";
import { Context } from "../../../context/Context";
import VideoThumbnail from "./VideoThumbnail";
import { EmptyLibrary } from "../EmptyLibrary";

const MyComponent = () => {
  const { videos, currentCategory } = useContext(Context);

  return (
    <section className={"flex justify-center gap-6 flex-wrap max-w-8xl"}>
      {videos[currentCategory].ids.length > 0 ? (
        <>
          {videos[currentCategory].ids.map((id) => {
            return (
              <React.Fragment key={id}>
                <VideoThumbnail id={id} />
              </React.Fragment>
            );
          })}
        </>
      ) : (
        <>
          <EmptyLibrary />
        </>
      )}
    </section>
  );
};

export default MyComponent;
