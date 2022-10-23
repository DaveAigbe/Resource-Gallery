import React, { useContext, useState } from "react";
import { Icon } from "@iconify/react";
import { Video } from "./Video";
import { Context } from "../../../context/Context";

const VideoThumbnail = ({ id }) => {
  // Needs to be local state so that react will not re-render entire video library which will give each video its own overlay
  // Effectively giving each thumbnail its own state will tell react that only this thumbnail has changed, not the rest
  const [active, setActive] = useState(false);
  const { videos, setVideos, currentCategory } = useContext(Context);

  const handleActive = () => {
    setActive((prevState) => {
      return !prevState;
    });
  };

  const handleDelete = () => {
    console.log(id);
    const updatedVideos = { ...videos };

    if (currentCategory === "all") {
      for (const [category] of Object.entries(updatedVideos)) {
        updatedVideos[category].ids = updatedVideos[category].ids.filter(
          (currId) => currId !== id
        );
      }
    } else {
      updatedVideos[currentCategory].ids = updatedVideos[
        currentCategory
      ].ids.filter((currId) => currId !== id);
    }

    setVideos(updatedVideos);
  };

  return (
    <section className={"relative"}>
      <img
        onClick={handleActive}
        className={
          "cursor-pointer rounded-2xl md:w-330 md:h-186 c-md:w-380 c-md:h-214 lg:w-460 lg:h-259 c-xl:w-560 c-xl:h-315"
        }
        src={`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`}
        alt="Youtube video thumbnail"
      />
      <section>
        <button>
          <Icon
            onClick={handleDelete}
            className={
              "absolute top-2 right-2 text-white text-2xl hover:text-red-600 transition ease-in-out duration-300"
            }
            icon="akar-icons:circle-x-fill"
          />
        </button>
        <button>
          <Icon
            className={
              "absolute top-10 right-2 text-white text-2xl hover:text-green-600 transition ease-in-out duration-300"
            }
            icon="akar-icons:circle-plus-fill"
          />
        </button>
      </section>
      {active && <Video id={id} handleActive={handleActive} />}
    </section>
  );
};

export default VideoThumbnail;

// "rounded-2xl md:w-330 md:h-186 my-md:w-380 my-md:h-214 lg:w-460 lg:h-259 my-lg:w-560 my-lg:h-315"
