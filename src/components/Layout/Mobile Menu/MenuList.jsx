import React, { useContext } from "react";
import { Context } from "../../../context/Context";
import { Icon } from "@iconify/react";
import CategoryButton from "../CategoryButton";

export const MenuList = ({ handleMenuClick }) => {
  const { videos, toggleMenu, setToggleMenu } = useContext(Context);

  return (
    <aside
      className={`${
        toggleMenu ? "" : "hidden"
      } w-1/2 fixed z-20 top-0 right-0 z-10`}
      aria-label="Sidebar"
    >
      <div className="overflow-y-auto py-4 px-3 h-screen rounded dark:bg-purple-200">
        <ul className={"space-y-2"}>
          <li className={"flex justify-between items-center mb-4"}>
            <div className={"tracking-wide text-black font-bold text-lg"}>
              Categories
            </div>
            <Icon
              onClick={() => setToggleMenu(!toggleMenu)}
              className={"text-lg"}
              icon="emojione-monotone:heavy-multiplication-x"
            />
          </li>
          {Object.keys(videos).map((category) => {
            return (
              <li
                onClick={() => handleMenuClick(category)}
                className={
                  "border-purple-700 border-2 rounded flex justify-center hover:bg-purple-700" +
                  "transition"
                }
                key={category}
              >
                <CategoryButton category={category} />
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};
