import { Icon } from "@iconify/react";
import React, { useContext } from "react";
import { Context } from "../../../context/Context";
import { MobileGenreMenuBackground } from "./MobileGenreMenuBackground";
import { MobileSideBar } from "./MobileSideBar";

export const MobileMenuHamburgerIcon = () => {
  const { toggleGenreActive, handleGenreClick } = useContext(Context);

  const handleMenuClick = (genre) => {
    handleGenreClick(genre);
    toggleGenreActive();
  };

  return (
    <>
      <Icon
        onClick={toggleGenreActive}
        className={" md:hidden text-5xl text-white absolute top-2.5 right-2"}
        icon="eva:menu-fill"
      />
      <MobileGenreMenuBackground />
      <MobileSideBar handleMenuClick={handleMenuClick} />
    </>
  );
};
