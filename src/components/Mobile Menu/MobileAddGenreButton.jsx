import { Icon } from "@iconify/react";
import React from "react";

export const MobileAddGenreButton = ({ handleShowGenreForm }) => {
  return (
    <button title={"Add genre"}>
      <Icon
        onClick={handleShowGenreForm}
        className={
          "text-4xl text-white self-center hover:text-green-400 transition-all ease-in-out"
        }
        icon="ant-design:plus-square-twotone"
      />
    </button>
  );
};
