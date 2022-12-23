import { Context } from "../../../context/Context";
import AppIntroduction from "../../Home/AppIntroduction";
import VideosController from "../VideosController/VideosController";
import { LoadingLibrary } from "./LoadingLibrary";
import React, { useContext } from "react";

export const LibraryController = () => {
  const { videos } = useContext(Context);

  return (
    <>
      <AppIntroduction />
      {videos ? <VideosController /> : <LoadingLibrary />}
    </>
  );
};
