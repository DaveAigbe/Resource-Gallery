import { Icon } from "@iconify/react";
import React from "react";

export const AddGenreButton = ({ handleShowGenreForm }) => {
  return (
    <button title={"Add genre"}>
      {/*<div className={"container invisible hover:visible relative z-10"}>*/}
      {/*  <AddGenreTooltip />*/}
      {/*</div>*/}
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
