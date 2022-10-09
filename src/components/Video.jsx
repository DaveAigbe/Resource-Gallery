import React from "react";
import { Icon } from "@iconify/react";

const Video = ({ id }) => {
  return (
    <div className={"relative"}>
      <iframe
        className={
          "rounded-2xl w-full h-full md:w-330 md:h-186 my-md:w-380 my-md:h-214 lg:w-460 lg:h-259 my-lg:w-560 my-lg:h-315"
        }
        src={`https://www.youtube.com/embed/${id}`}
        title="YouTube video player"
        allowFullScreen={true}
      ></iframe>
      <button>
        <Icon
          xlinkTitle={"Delete Entry"}
          className={
            "absolute top-5 right-5 text-white text-2xl hover:text-red-600 transition ease-in-out duration-300"
          }
          icon="akar-icons:circle-x-fill"
        />
      </button>
    </div>
  );
};

export default Video;

// "rounded-2xl md:w-330 md:h-186 my-md:w-380 my-md:h-214 lg:w-460 lg:h-259 my-lg:w-560 my-lg:h-315"
