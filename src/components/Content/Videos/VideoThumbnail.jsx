import React, { useContext, useState } from "react";
import { Video } from "./Video";
import { Context } from "../../../context/Context";
import { AddVideoCategoriesButton } from "./Buttons/AddVideoCategoriesButton";
import { DeleteVideoButton } from "./Buttons/DeleteVideoButton";
import { AddVideoCategoriesForm } from "./Forms/AddVideoCategoriesForm";

const VideoThumbnail = ({ id }) => {
  // Needs to be local state so that react will not re-render entire video library which will give each video its own overlay
  // Effectively giving each thumbnail its own state will tell react that only this thumbnail has changed, not the rest
  const [videoPlaying, setVideoPlaying] = useState(false);
  const { videos, setVideos, currentCategory } = useContext(Context);
  const [showForm, setShowForm] = useState(false);
  const [categoriesChecked, setCategoriesChecked] = useState({});

  const handleActive = () => {
    setVideoPlaying((prevState) => {
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

  const handleAddVideoCategoriesForm = (e) => {
    e.preventDefault();
    const updatedVideos = { ...videos };

    for (const [category, val] of Object.entries(categoriesChecked)) {
      const currentIds = updatedVideos?.[category].ids;

      if (val) {
        if (!currentIds.includes(id)) {
          updatedVideos[category].ids = [id, ...updatedVideos[category].ids];
          setVideos(updatedVideos);
        }
      } else {
        if (currentIds.includes(id)) {
          updatedVideos[category].ids = currentIds.filter(
            (currId) => currId !== id
          );
          setVideos(updatedVideos);
        }
      }
    }
    handleShowVideoCategoriesForm();
  };

  const handleShowVideoCategoriesForm = () => {
    setShowForm((prevState) => {
      return !prevState;
    });
  };

  return (
    <section
      className={`${
        !videoPlaying &&
        !showForm &&
        "hover:scale-105 transition-all ease-in-out"
      } relative`}
    >
      <img
        onClick={handleActive}
        className={
          "cursor-pointer rounded-2xl md:w-330 md:h-186 c-md:w-380 c-md:h-214 lg:w-460 lg:h-259 c-xl:w-560 c-xl:h-315"
        }
        src={`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`}
        alt="Youtube video thumbnail"
      />
      <section>
        <DeleteVideoButton
          handleDelete={handleDelete}
          currentCategory={currentCategory}
        />
        <AddVideoCategoriesButton
          handleShowVideoCategoriesForm={handleShowVideoCategoriesForm}
        />
      </section>
      {videoPlaying && <Video id={id} handleActive={handleActive} />}
      {showForm && (
        <AddVideoCategoriesForm
          handleShowVideoCategoriesForm={handleShowVideoCategoriesForm}
          handleAddVideoCategoriesForm={handleAddVideoCategoriesForm}
          categoriesChecked={categoriesChecked}
          setCategoriesChecked={setCategoriesChecked}
          id={id}
        />
      )}
    </section>
  );
};

export default VideoThumbnail;

// "rounded-2xl md:w-330 md:h-186 my-md:w-380 my-md:h-214 lg:w-460 lg:h-259 my-lg:w-560 my-lg:h-315"
