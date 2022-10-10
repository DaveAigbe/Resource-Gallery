import React, {useContext, useState} from 'react';
import {Icon} from '@iconify/react';
import {VideoContext} from '../Context/VideoContext';
import CategoryButton from './CategoryButton';
import {CategoryContext} from '../Context/CategoryContext';

const Layout = ({children}) => {
    const [videos] = useContext(VideoContext);
    const [currentCategory, setCurrentCategory] = useState('all');

    return (
        <CategoryContext.Provider value={[currentCategory, setCurrentCategory]}>
            <div className="min-h-screen min-w-screen font-roboto p-10 bg-gradient-to-r
    from-slate-900 via-purple-900 to-slate-900 flex flex-col gap-10 items-center justify-center"
            >
                <section className={'absolute top-5 text xl flex gap-3'}>
                    {
                        videos.map(categories => {
                            return (
                                <CategoryButton category={categories.category}/>
                            );
                        })
                    }
                </section>
                <section className={'absolute top-5 sm:right-5 text-white flex gap-4 items-center'}>
                    <p className={'text-xl'}>Hello, User!</p>
                    <Icon className={'text-3xl'} icon="bi:person-circle"/>
                </section>
                {children}
            </div>
        </CategoryContext.Provider>
    );
};

export default Layout;
