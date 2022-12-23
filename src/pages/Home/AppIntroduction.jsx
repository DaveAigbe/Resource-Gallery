import React from 'react';
import AddVideoForm from '../Library/AddVideoForm';
import {Icon} from '@iconify/react';
import {useLocation} from 'react-router-dom';
import {AppDescription} from './AppDescription';

const AppIntroduction = () => {
    const location = useLocation();

    return (
        <div className={'my-14 md:my-36 text-center lg:text-left md:max-w-6xl'}>
            <section>
                <div
                    className={'tracking-wide text-4xl sm:text-5xl md:text-6xl text-white font-bold mb-14 flex gap-4 justify-center '}>
                    <h1>Smart Library</h1>
                    <Icon icon="bi:book-half"/>
                </div>
                <div className={'text-gray-300 leading-loose sm:text-lg md:text-xl flex flex-col md:flex-row gap-4 '}>
                    <AppDescription/>
                    {location.pathname === '/' ? '' : <AddVideoForm/>}
                </div>
            </section>
        </div>
    );
};

export default AppIntroduction;
