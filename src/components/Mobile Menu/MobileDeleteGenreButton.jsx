import React from "react";

export const MobileDeleteGenreButton = ({ handleRemoveGenre }) => {
  return (
    <div
      onClick={handleRemoveGenre}
      className={
        "absolute text-xl bg-red-500 top-0 bottom-0 right-0 p-2.5 flex justify-center items-center"
      }
    >
      <div>X</div>
    </div>
  );
};
