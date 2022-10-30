import { Icon } from "@iconify/react";
import React from "react";

export const NewCategoryButton = ({ handleShowCategoryForm }) => {
  return (
    <button title={"Add Category"}>
      {/*<div className={"container invisible hover:visible relative z-10"}>*/}
      {/*  <CategoriesTooltip />*/}
      {/*</div>*/}
      <Icon
        onClick={handleShowCategoryForm}
        className={
          "text-4xl text-white self-center hover:text-green-400 transition-all ease-in-out"
        }
        icon="ant-design:plus-square-twotone"
      />
    </button>
  );
};
