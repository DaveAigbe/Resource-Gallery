import Description from './components/Description';
import VideosLibrary from './components/VideosLibrary';
import React, {useState} from 'react';
import Layout from './components/Layout';
import {Context} from './context/Context';

function App() {
    const [videos, setVideos] = useState({
        all: {
            ids: ['DmxzHJ3lq6U', 'uyI8vBC3Uj0', '26ogBZXeBwc', 's6UAuFzL308', '7wzMMBRVrfw', 'novnyCaa7To', 'rtR4s626ebE', '6OhMbf2v_jI']
        },
        react: {
            ids: ['7wzMMBRVrfw', 'novnyCaa7To', 'rtR4s626ebE', '6OhMbf2v_jI']
        }
    });
    const [currentCategory, setCurrentCategory] = useState('all');

    return (
        <Context.Provider value={{videos, setVideos, currentCategory, setCurrentCategory}}>
            <Layout>
                <Description/>
                <VideosLibrary/>
            </Layout>
        </Context.Provider>
    );
}

export default App;
