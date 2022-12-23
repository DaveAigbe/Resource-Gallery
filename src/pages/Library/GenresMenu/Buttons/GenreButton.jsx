import React, { useContext } from "react";
import { Context } from "../../../../context/Context";
import { titleCaseConverter } from "../../../../utils/titleCaseConverter";
import { DeleteGenreButton } from "./DeleteGenreButton";
import {Link, Outlet} from 'react-router-dom';

/*
 * 1. Event listener was propagating back up after object was deleted because the parent container had a onClick as well.
 *    After deletion it triggered the function setting current genre to that nonexistent object.
 * 2. Category must also be changed back to all by default
 * */

export const GenreButton = ({
  genre,
  count,
  isCurrentGenre,
  handleRemoveGenre,
}) => {
  const { handleGenreClick } = useContext(Context);
  return (
      <>
        <Link to={`library/${genre}`}>
          <button
              title={count}
              onClick={() => handleGenreClick(genre)}
              className={
                  `${
                      isCurrentGenre ? "text-yellow-300 font-bold " : "text-white "
                  } tracking-wide bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br ` +
                  "focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-300 " +
                  "rounded-lg text-sm px-5 py-2.5 text-center relative z-10"
              }
          >
            {titleCaseConverter(genre)}
            {genre !== "all" && (
                <DeleteGenreButton handleRemoveGenre={handleRemoveGenre} />
            )}
          </button>
        </Link>
        <Outlet/>
      </>
  );
};
