import { Icon } from "@iconify/react";
import React from "react";

export const CloseFormButton = ({ handleShowForm }) => {
  return (
    <button
      className={"absolute top-2 right-1 hover:animate-spin"}
      onClick={handleShowForm}
    >
      <Icon
        className={"text-red-600 text-xl "}
        icon="akar-icons:circle-x-fill"
      />
    </button>
  );
};
