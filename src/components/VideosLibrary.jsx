import React, {useContext} from 'react';
import VideoThumbnail from './VideoThumbnail';
import {VideoContext} from '../Context/VideoContext';
import {CategoryContext} from '../Context/CategoryContext';

const MyComponent = () => {
    const [videos] = useContext(VideoContext);
    const [currentCategory] = useContext(CategoryContext);

    return (
        <section className={'flex justify-center gap-6 flex-wrap max-w-8xl'}>
            {
                videos[currentCategory].ids.map(id => {
                    return (
                        <React.Fragment key={id}>
                            <VideoThumbnail id={id}/>
                        </React.Fragment>
                    )
                })
            }
        </section>
    );
};

export default MyComponent;
