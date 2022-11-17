import React, { useContext } from "react";
import { Context } from "../../../context/Context";
import { MobileGenreMenu } from "./MobileGenreMenu";

export const MobileSideBar = ({ handleMenuClick }) => {
  const { genreActive } = useContext(Context);

  return (
    <aside
      className={`${
        !genreActive && "hidden"
      } w-1/2 fixed z-20 top-0 right-0 z-10`}
      aria-label="Sidebar"
    >
      <MobileGenreMenu handleMenuClick={handleMenuClick} />
    </aside>
  );
};
