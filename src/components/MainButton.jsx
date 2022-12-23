import React from 'react';

export const MainButton = ({content}) => {
    return (
        <>
            <button
                type={'submit'}
                className={'text-gray-600 bg-purple-300 rounded w-full md:w-96 h-14  hover:bg-purple-500 hover:animate-pulse hover:translate-y-0.5 hover:translate-x-0.5 shadow-lg shadow-purple-600 transition duration-300 ease-in-out font-bold'}
            >
                {content}
            </button>
        </>
    );
};
