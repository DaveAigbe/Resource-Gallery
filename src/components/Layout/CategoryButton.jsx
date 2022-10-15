import React, {useContext} from 'react';
import {Context} from '../../context/Context';

const CategoryButton = ({category}) => {
    const {toggleMenu, handleCategoryClick} = useContext(Context);

    return (
        <>
            {!toggleMenu ?
                (
                    <button
                        onClick={() => handleCategoryClick(category)}
                        className={'tracking-wide font-bold text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br ' +
                            'focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 ' +
                            'font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'}
                    >
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                    </button>
                )
                :
                (
                    <div
                        className={'tracking-wide text-black font-bold text-md pt-2 pb-2 flex items-center'}
                    >
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                    </div>
                )
            }
        </>
    );
};

export default CategoryButton;
