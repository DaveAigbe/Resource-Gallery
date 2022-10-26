import Description from "./components/Content/Description";
import VideosLibrary from "./components/Content/Videos/VideosLibrary";
import React, { useState } from "react";
import Layout from "./components/Layout/Layout";
import { Context } from "./context/Context";

function App() {
  const [videos, setVideos] = useState({
    all: {
      ids: [
        "DmxzHJ3lq6U",
        "uyI8vBC3Uj0",
        "26ogBZXeBwc",
        "s6UAuFzL308",
        "7wzMMBRVrfw",
        "novnyCaa7To",
        "rtR4s626ebE",
        "6OhMbf2v_jI",
        "HvPlEJ3LHgE",
        "QwQuro7ekvc",
        "q_RLfOB7axQ",
        "b42CJ0r-1to",
        "K1iu1kXkVoA",
        "l20MBBFZAmA",
        "j95Lwxvi9JY",
        "_8gHHBlbziw",
        "DHvZLI7Db8E",
        "2jqok-WgelI",
      ],
    },
    react: {
      ids: ["7wzMMBRVrfw", "novnyCaa7To", "rtR4s626ebE", "6OhMbf2v_jI"],
    },
    java: {
      ids: [
        "HvPlEJ3LHgE",
        "QwQuro7ekvc",
        "q_RLfOB7axQ",
        "b42CJ0r-1to",
        "K1iu1kXkVoA",
      ],
    },
    node: {
      ids: [
        "l20MBBFZAmA",
        "j95Lwxvi9JY",
        "_8gHHBlbziw",
        "DHvZLI7Db8E",
        "2jqok-WgelI",
      ],
    },
  });
  const [currentCategory, setCurrentCategory] = useState("all");
  const [toggleMenu, setToggleMenu] = useState(false);

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
        <VideosLibrary />
      </Layout>
    </Context.Provider>
  );
}

export default App;
