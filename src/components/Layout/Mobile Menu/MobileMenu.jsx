import { Icon } from "@iconify/react";
import React, { useContext } from "react";
import { Context } from "../../../context/Context";
import { MenuBackground } from "./MenuBackground";
import { MenuList } from "./MenuList";

export const MobileMenu = () => {
  const { toggleMenu, setToggleMenu, handleCategoryClick } =
    useContext(Context);

  const handleMenuClick = (category) => {
    handleCategoryClick(category);
    setToggleMenu(!toggleMenu);
  };

  return (
    <>
      <Icon
        onClick={() => setToggleMenu(!toggleMenu)}
        className={" sm:hidden text-5xl text-white absolute top-2.5 right-2"}
        icon="eva:menu-fill"
      />
      <MenuBackground />
      <MenuList handleMenuClick={handleMenuClick} />
    </>
  );
};
