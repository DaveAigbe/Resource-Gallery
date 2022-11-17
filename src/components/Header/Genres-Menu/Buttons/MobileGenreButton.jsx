import { titleCaseConverter } from "../../../../utils/titleCaseConverter";
import React from "react";
import { MobileDeleteGenreButton } from "./Delete/MobileDeleteGenreButton";

export const MobileGenreButton = ({ count, genre, handleRemoveGenre }) => {
  return (
    <button
      title={count}
      className={
        "tracking-wide text-white font-bold text-md pt-2 pb-2 flex items-center"
      }
    >
      {titleCaseConverter(genre)}
      {genre !== "all" && (
        <MobileDeleteGenreButton handleRemoveGenre={handleRemoveGenre} />
      )}
    </button>
  );
};
