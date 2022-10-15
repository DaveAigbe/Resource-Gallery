import React from 'react';

export const Video = ({id, handleActive}) => {

    return (
        <div onClick={handleActive}
             className={'fixed backdrop-blur-md bg-gray-600/25 h-screen w-screen flex justify-center items-center fixed z-10 top-0 right-0'}>
            <iframe
                className={
                    'rounded-2xl md:w-330 md:h-186 my-md:w-380 my-md:h-214 lg:w-460 lg:h-259 my-lg:w-560 my-lg:h-315'
                }
                src={`https://www.youtube.com/embed/${id}`}
                title="YouTube video player"
                allowFullScreen={true}
            ></iframe>
        </div>
    );
};
