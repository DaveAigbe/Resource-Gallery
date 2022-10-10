import React, {useContext} from 'react';
import Video from './Video';
import {VideoContext} from '../Context/VideoContext';
import {CategoryContext} from '../Context/CategoryContext';

const MyComponent = () => {
    const [videos] = useContext(VideoContext);
    const [currentCategory] = useContext(CategoryContext);

    return (
        <section className={'flex justify-center gap-6 flex-wrap max-w-8xl'}>
            {videos
                .filter(categories => categories.category === currentCategory)
                .map(category => category.ids.map(id => {
                        return (
                            <Video id={id}/>
                        );
                    }
                ))
            }
        </section>
    );
};

export default MyComponent;
