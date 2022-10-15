import React from 'react';
import {MobileMenu} from './Mobile Menu/MobileMenu';
import {CategoriesList} from './CategoriesList';
import {Profile} from './Profile';

const Layout = ({children}) => {

    return (
        <div
            className={`min-h-screen min-w-screen font-roboto p-10 flex flex-col gap-10 items-center justify-center`}
            style={{
                backgroundImage: 'url(\'/images/stacked-waves-purple-shadow.svg\')',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <CategoriesList/>
            <MobileMenu/>
            <Profile/>
            {children}
        </div>
    );
};

export default Layout;
