import { Icon } from "@iconify/react";
import React from "react";

export const AddCategoryButton = () => {
  return (
    <button title={"Add Video to Categories"}>
      <Icon
        className={
          "absolute top-10 right-2 text-white text-2xl hover:text-green-600 transition ease-in-out duration-300"
        }
        icon="akar-icons:circle-plus-fill"
      />
    </button>
  );
};
