import { Icon } from "@iconify/react";
import React from "react";

export const AddGenreButton = ({ handleShowGenreForm }) => {
  return (
    <div
        title={"Add genre"}
        className={"relative after:scale-0 hover:after:scale-100 after:origin-top after:transition-all after:duration-150 after:ease-in-out  after:content-['Add_New_Genre'] after:text-white after:text-sm after:absolute after:top-100p after:left-0 after:right-0 " +
            "after:border after:border-black after:p-4 after:text-center after:bg-gray-600 after:rounded after:w-fit"}
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
