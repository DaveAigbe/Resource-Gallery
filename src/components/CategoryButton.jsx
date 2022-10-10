import React, {useContext} from 'react';
import {CategoryContext} from '../Context/CategoryContext';

const CategoryButton = ({category}) => {
    const [, setCurrentCategory] = useContext(CategoryContext);

    const handleCategoryClick = () => {
        setCurrentCategory(category);
    };

    return (
        <button
            onClick={handleCategoryClick}
            className={'tracking-wide font-bold text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br ' +
                'focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 ' +
                'font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'}
        >
            {category.charAt(0).toUpperCase() + category.slice(1)}
        </button>
    );
};

export default CategoryButton;
