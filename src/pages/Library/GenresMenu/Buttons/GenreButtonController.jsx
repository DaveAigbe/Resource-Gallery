import React, { useContext } from "react";
import { Context } from "../../../../context/Context";
import { MobileGenreButton } from "../../../../components/Mobile Menu/MobileGenreButton";
import { GenreButton } from "./GenreButton";

/*
 * 1. Event listener was propagating back up after object was deleted because the parent container had a onClick as well.
 *    After deletion it triggered the function setting current genre to that nonexistent object.
 * 2. Category must also be changed back to all by default
 * */

const GenreButtonController = ({ genre, count, isCurrentGenre }) => {
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
        <GenreButton
          genre={genre}
          count={count}
          isCurrentGenre={isCurrentGenre}
          handleRemoveGenre={handleRemoveGenre}
        />
      ) : (
        <MobileGenreButton
          handleRemoveGenre={handleRemoveGenre}
          genre={genre}
          count={count}
        />
      )}
    </>
  );
};

export default GenreButtonController;
