import Description from "./components/Content/Description";
import VideosLibrary from "./components/Content/Videos/VideosLibrary";
import React, { useEffect, useState } from "react";
import Layout from "./components/Layout/Layout";
import { Context } from "./context/Context";
import handleLocalStorage from "./utils/updateLocalStorage";
import { defaultVideos } from "./data/defaults";
import { LoadingLibrary } from "./components/Content/LoadingLibrary";

function App() {
  const [videos, setVideos] = useState(null);
  const [currentCategory, setCurrentCategory] = useState("all");
  const [toggleMenu, setToggleMenu] = useState(false);

  useEffect(() => {
    handleLocalStorage("categories", videos, defaultVideos, setVideos);
  }, [videos]);

  const handleCategoryClick = (category) => {
    setCurrentCategory(category);
  };

  return (
    <Context.Provider
      value={{
        videos,
        setVideos,
        currentCategory,
        setCurrentCategory,
        toggleMenu,
        setToggleMenu,
        handleCategoryClick,
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
