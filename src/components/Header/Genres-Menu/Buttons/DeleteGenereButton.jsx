import { Icon } from "@iconify/react";
import React from "react";

export const DeleteGenreButton = ({ handleRemoveGenre }) => {
  return (
    <Icon
      onClick={handleRemoveGenre}
      className={
        "text-purple-300 text-md hover:text-red-500 hover:animate-spin absolute top-0.5 right-0.5 z-20 cursor-pointer"
      }
      icon="akar-icons:circle-x-fill"
    />
  );
};
