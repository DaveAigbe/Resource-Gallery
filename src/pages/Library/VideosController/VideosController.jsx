import React, { useContext } from "react";
import { Context } from "../../../context/Context";
import { EmptyLibrary } from "./EmptyLibrary";
import { Videos } from "./Videos";

const MyComponent = () => {
  const { videos, currentGenre } = useContext(Context);
  const videoCount = videos[currentGenre].ids.length;

  return (
    <section className={"flex justify-center gap-6 flex-wrap max-w-8xl"}>
      {videoCount > 0 ? <Videos /> : <EmptyLibrary />}
    </section>
  );
};

export default MyComponent;
