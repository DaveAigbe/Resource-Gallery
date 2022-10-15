import {Icon} from '@iconify/react';
import React from 'react';

export const Profile = () => {
    return (
        <section className={'absolute top-5 sm:right-5 text-white flex gap-4 items-center'}>
            <p className={'text-xl'}>Hello, User!</p>
            <Icon className={'text-3xl'} icon="bi:person-circle"/>
        </section>
    );
};
