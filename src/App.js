import Description from "./components/Header/Introduction/Description";
import VideosLibrary from "./components/Content/Videos/VideosLibrary";
import React, { useEffect, useState } from "react";
import Layout from "./components/Layout/Layout";
import { Context } from "./context/Context";
import handleLocalStorage from "./utils/updateLocalStorage";
import { defaultVideos } from "./data/defaults";
import { LoadingLibrary } from "./components/Content/LoadingLibrary";

function App() {
  const [videos, setVideos] = useState(null);
  const [currentGenre, setCurrentGenre] = useState("all");
  const [genreActive, setGenreActive] = useState(false);

  useEffect(() => {
    handleLocalStorage("genres", videos, defaultVideos, setVideos);
  }, [videos]);

  const handleGenreClick = (genre) => {
    setCurrentGenre(genre);
  };

  return (
    <Context.Provider
      value={{
        videos,
        setVideos,
        currentGenre,
        setCurrentGenre,
        genreActive,
        setGenreActive,
        handleGenreClick,
      }}
    >
      <Layout>
        <Description />
        {videos ? <VideosLibrary /> : <LoadingLibrary />}
      </Layout>
    </Context.Provider>
  );
}

export default App;
