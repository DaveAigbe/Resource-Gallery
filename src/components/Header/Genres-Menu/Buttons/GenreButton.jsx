import React, { useContext } from "react";
import { Context } from "../../../../context/Context";
import { titleCaseConverter } from "../../../../utils/titleCaseConverter";
import { DeleteGenreButton } from "./DeleteGenereButton";

/*
 * 1. Event listener was propagating back up after object was deleted because the parent container had a onClick as well.
 *    After deletion it triggered the function setting current genre to that nonexistent object.
 * 2. Category must also be changed back to all by default
 * */

const GenreButton = ({ genre, count, isCurrentGenre }) => {
  const { genreActive, handleGenreClick, videos, setVideos } =
    useContext(Context);

  const handleRemoveGenre = (e) => {
    e.stopPropagation(); // 1.
    const updatedVideos = { ...videos };
    delete updatedVideos[genre];

    handleGenreClick("all"); // 2.
    setVideos(updatedVideos);
  };

  return (
    <>
      {!genreActive ? (
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
          {genre === "all" ? (
            <></>
          ) : (
            <DeleteGenreButton handleRemoveGenre={handleRemoveGenre} />
          )}
        </button>
      ) : (
        <button
          title={count}
          className={
            "tracking-wide text-green-400 font-bold text-md pt-2 pb-2 flex items-center"
          }
        >
          {titleCaseConverter(genre)}
          {genre === "all" ? (
            <></>
          ) : (
            <DeleteGenreButton handleRemoveGenre={handleRemoveGenre} />
          )}
        </button>
      )}
    </>
  );
};

export default GenreButton;
