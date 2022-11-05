import { Icon } from "@iconify/react";
import React, { useContext } from "react";
import { Context } from "../../../context/Context";
import { CategoriesMenuBackground } from "./CategoriesMenuBackground";
import { CategoriesMenu } from "./CategoriesMenu";

export const MenuIcon = () => {
  const { categoryActive, setCategoryActive, handleCategoryClick } =
    useContext(Context);

  const handleMenuClick = (category) => {
    handleCategoryClick(category);
    setCategoryActive(!categoryActive);
  };

  return (
    <>
      <Icon
        onClick={() => setCategoryActive(!categoryActive)}
        className={" sm:hidden text-5xl text-white absolute top-2.5 right-2"}
        icon="eva:menu-fill"
      />
      <CategoriesMenuBackground />
      <CategoriesMenu handleMenuClick={handleMenuClick} />
    </>
  );
};
