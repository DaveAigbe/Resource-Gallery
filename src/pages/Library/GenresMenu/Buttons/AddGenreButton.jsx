import { Icon } from "@iconify/react";
import React from "react";

export const AddGenreButton = ({ handleShowGenreForm }) => {
  return (
    <div
        title={"Add genre"}
        className={"relative after:scale-0 hover:after:scale-100 after:content-['Add_New_Genre']" +
            " after:border after:border-purple-400 after:bg-purple-600 after:rounded after:text-white after:text-sm after:p-2 after:text-center after:w-fit after:mt-1" +
            " after:origin-top after:transition-all after:duration-150 after:ease-in-out after:absolute after:top-100p"}
    >
      <Icon
        onClick={handleShowGenreForm}
        className={
          "text-4xl text-white self-center hover:text-green-400 transition-all ease-in-out cursor-pointer"
        }
        icon="ant-design:plus-square-twotone"
      />
    </div>
  );
};
