import Description from "./components/Description";
import VideosLibrary from "./components/VideosLibrary";
import React, { useState } from "react";
import { VideoContext } from "./components/VideoContext";
import Layout from "./components/Layout";

function App() {
  const [videos, setVideos] = useState([
    "DmxzHJ3lq6U",
    "uyI8vBC3Uj0",
    "26ogBZXeBwc",
    "s6UAuFzL308",
  ]);

  return (
    <VideoContext.Provider value={[videos, setVideos]}>
      <Layout>
        <Description />
        <VideosLibrary />
      </Layout>
    </VideoContext.Provider>
  );
}

export default App;
