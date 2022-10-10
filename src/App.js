import Description from './components/Description';
import VideosLibrary from './components/VideosLibrary';
import React, {useState} from 'react';
import {VideoContext} from './Context/VideoContext';
import Layout from './components/Layout';

function App() {
    const [videos, setVideos] = useState({
        all: {
            ids: ['DmxzHJ3lq6U', 'uyI8vBC3Uj0', '26ogBZXeBwc', 's6UAuFzL308', '7wzMMBRVrfw', 'novnyCaa7To', 'rtR4s626ebE', '6OhMbf2v_jI']
        },
        react: {
            ids: ['7wzMMBRVrfw', 'novnyCaa7To', 'rtR4s626ebE', '6OhMbf2v_jI']
        }
    });

    return (
        <VideoContext.Provider value={[videos, setVideos]}>
            <Layout>
                <Description/>
                <VideosLibrary/>
            </Layout>
        </VideoContext.Provider>
    );
}

export default App;
