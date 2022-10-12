import React, {useContext} from 'react';
import {Icon} from '@iconify/react';
import CategoryButton from './CategoryButton';
import {Context} from '../context/Context';

const Layout = ({children}) => {
    const {videos} = useContext(Context);

    return (
        <div className={`"min-h-screen min-w-screen font-roboto p-10 bg-gradient-to-r
    from-slate-900 via-purple-900 to-slate-900 flex flex-col gap-10 items-center justify-center`}
        >
            <section className={'absolute top-5 text xl flex gap-3'}>
                {
                    Object.keys(videos).map(category => {
                        return (
                            <React.Fragment key={category}>
                                <CategoryButton category={category}/>
                            </React.Fragment>
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
    );
};

export default Layout;
