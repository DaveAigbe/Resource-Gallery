import React, {useEffect, useState} from 'react';
import Layout from '../components/Layout';
import {Context} from '../context/Context';
import handleLocalStorage from '../utils/updateLocalStorage';
import {defaultVideos} from '../data/defaults';
import {useToggleActive} from '../hooks/useToggleActive';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Home} from '../pages/Home/Home';
import {LibraryController} from '../pages/Library/LibraryController/LibraryController';
import {Account} from '../pages/Account';

function App() {
    const [videos, setVideos] = useState(null);
    const [currentGenre, setCurrentGenre] = useState('all');
    const {isActive: genreActive, toggleActive: toggleGenreActive} =
        useToggleActive();

    useEffect(() => {
        handleLocalStorage('genres', videos, defaultVideos, setVideos);
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
                toggleGenreActive,
                handleGenreClick,
            }}
        >
            <Router>
                <Layout>
                    <Routes>
                        <Route path={'/'} element={<Home/>}/>
                        <Route path={'/library'} element={<LibraryController/>}>
                        </Route>
                        <Route path={'/account'} element={<Account/>}/>
                    </Routes>
                </Layout>
            </Router>
        </Context.Provider>
    );
}

export default App;
