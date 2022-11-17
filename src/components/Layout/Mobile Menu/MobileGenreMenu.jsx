import { Icon } from "@iconify/react";
import GenreButtonLogic from "../../Header/Genres-Menu/Buttons/GenreButtonLogic";
import React, { useContext } from "react";
import { Context } from "../../../context/Context";

export const MobileGenreMenu = ({ handleMenuClick }) => {
  const { videos, toggleGenreActive } = useContext(Context);

  return (
    <div className="overflow-y-auto py-4 px-3 h-screen rounded bg-purple-600">
      <ul className={"space-y-2"}>
        <li className={"flex justify-between items-center mb-4"}>
          <div className={"tracking-wide text-gray-200 font-bold text-lg"}>
            Genres
          </div>
          <Icon
            onClick={toggleGenreActive}
            className={"text-lg  text-red-400 "}
            icon="emojione-monotone:heavy-multiplication-x"
          />
        </li>
        <li
          className={
            "border-purple-400 border-2 rounded flex justify-center hover:bg-purple-700" +
            "transition relative"
          }
        >
          {/*<MobileAddGenreButton />*/}
        </li>
        {Object.keys(videos).map((genre) => {
          return (
            <li
              onClick={() => handleMenuClick(genre)}
              className={
                "border-purple-400 border-2 rounded flex justify-center hover:bg-purple-700" +
                "transition relative"
              }
              key={genre}
            >
              <GenreButtonLogic genre={genre} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
