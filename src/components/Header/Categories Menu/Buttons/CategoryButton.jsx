import React, { useContext } from "react";
import { Context } from "../../../../context/Context";

const CategoryButton = ({ category, count, isCurrentCategory }) => {
  const { categoryActive, handleCategoryClick } = useContext(Context);

  return (
    <>
      {!categoryActive ? (
        <button
          title={count}
          onClick={() => handleCategoryClick(category)}
          className={
            `${
              isCurrentCategory ? "text-yellow-300 font-bold " : "text-white "
            } tracking-wide bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br ` +
            "focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-300 " +
            "rounded-lg text-sm px-5 py-2.5 text-center"
          }
        >
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </button>
      ) : (
        <div
          title={count}
          className={
            "tracking-wide text-green-400 font-bold text-md pt-2 pb-2 flex items-center"
          }
        >
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </div>
      )}
    </>
  );
};

export default CategoryButton;
