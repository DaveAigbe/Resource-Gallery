import React, {useContext} from 'react';
import {Icon} from '@iconify/react';
import {VideoContext} from '../Context/VideoContext';

const Video = ({id}) => {
    const [videos, setVideos] = useContext(VideoContext);

    const handleDelete = () => {
        const updatedVideos = videos.all.filter((video) => video !== id);
        setVideos(updatedVideos);
    };

    return (
        <section className={'relative'}>
            <iframe
                className={
                    'rounded-2xl w-full h-full md:w-330 md:h-186 my-md:w-380 my-md:h-214 lg:w-460 lg:h-259 my-lg:w-560 my-lg:h-315'
                }
                src={`https://www.youtube.com/embed/${id}`}
                title="YouTube video player"
                allowFullScreen={true}
            ></iframe>
            <button onClick={handleDelete}>
                <Icon
                    className={
                        'absolute top-2 right-2 text-white text-2xl hover:text-red-600 transition ease-in-out duration-300'
                    }
                    icon="akar-icons:circle-x-fill"
                />
            </button>
            <button>
                <Icon
                    className={
                        'absolute top-10 right-2 text-white text-2xl hover:text-green-600 transition ease-in-out duration-300'
                    }
                    icon="akar-icons:circle-plus-fill"
                />
            </button>
        </section>
    );
};

export default Video;

// "rounded-2xl md:w-330 md:h-186 my-md:w-380 my-md:h-214 lg:w-460 lg:h-259 my-lg:w-560 my-lg:h-315"
