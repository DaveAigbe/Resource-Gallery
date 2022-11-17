import React, { useContext } from "react";
import { Context } from "../../../context/Context";
import GenreButtonLogic from "./Buttons/GenreButtonLogic";
import { AddGenreForm } from "./Forms/AddGenreForm";
import { AddGenreButton } from "./Buttons/Add/AddGenreButton";
import { useToggleActive } from "../../../hooks/useToggleActive";

export const GenreMenu = () => {
  const { videos, currentGenre } = useContext(Context);
  const { isActive: formShowing, toggleActive: toggleFormShowing } =
    useToggleActive();

  return (
    <section
      className={"hidden md:flex absolute top-5 text-xl gap-4 items-center"}
    >
      {Object.keys(videos).map((genre) => {
        return (
          <React.Fragment key={genre}>
            <GenreButtonLogic
              genre={genre}
              count={videos[genre].ids.length}
              isCurrentGenre={genre === currentGenre}
            />
          </React.Fragment>
        );
      })}
      <AddGenreButton handleShowGenreForm={toggleFormShowing} />
      {formShowing && <AddGenreForm handleShowGenreForm={toggleFormShowing} />}
    </section>
  );
};
