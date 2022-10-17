import React from "react";

export const Video = ({ id, handleActive }) => {
  return (
    <div
      onClick={handleActive}
      className={
        "fixed backdrop-blur-md bg-gray-600/25 h-screen w-screen flex justify-center items-center fixed z-10 top-0 right-0"
      }
    >
      <iframe
        className={
          "rounded-2xl c-xxs:w-330 c-xxs:h-186 c-xs:w-460 c-xs:h-259 c-sm:w-560 c-sm:h-315 c-lg:w-700 c-lg:h-394 c-xl:w-900 c-xl:h-506"
        }
        src={`https://www.youtube.com/embed/${id}`}
        title="YouTube video player"
        allowFullScreen={true}
      ></iframe>
    </div>
  );
};
