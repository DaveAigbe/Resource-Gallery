import React, { useContext } from "react";
import { Context } from "../../../context/Context";

export const GenreMenuBackground = () => {
  const { genreActive, setGenreActive } = useContext(Context);
  return (
    <div
      onClick={() => setGenreActive(!genreActive)}
      className={`${
        genreActive ? "" : "hidden"
      } w-screen h-screen bg-purple-400 top-0 right-0 bottom-0 z-10 fixed`}
      style={{
        backgroundColor: "rgba(186,138,246, 0.9)",
      }}
    ></div>
  );
};
