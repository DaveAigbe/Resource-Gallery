import { Icon } from "@iconify/react";
import React, { useContext } from "react";
import { Context } from "../../../context/Context";
import { GenreMenuBackground } from "./GenreMenuBackground";
import { GenreMenu } from "./GenreMenu";

export const MenuIcon = () => {
  const { genreActive, setGenreActive, handleGenreClick } = useContext(Context);

  const handleMenuClick = (genre) => {
    handleGenreClick(genre);
    setGenreActive(!genreActive);
  };

  return (
    <>
      <Icon
        onClick={() => setGenreActive(!genreActive)}
        className={" sm:hidden text-5xl text-white absolute top-2.5 right-2"}
        icon="eva:menu-fill"
      />
      <GenreMenuBackground />
      <GenreMenu handleMenuClick={handleMenuClick} />
    </>
  );
};
