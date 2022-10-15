import React, {useContext} from 'react';
import {Context} from '../../context/Context';
import CategoryButton from './CategoryButton';

export const CategoriesList = () => {
    const {videos} = useContext(Context);

    return (
        <section className={'hidden sm:flex absolute top-5 text-xl gap-3'}>
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
    );
};
