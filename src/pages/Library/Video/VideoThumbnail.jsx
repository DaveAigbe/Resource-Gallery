import React, { useContext, useState } from "react";
import { Video } from "./Video";
import { Context } from "../../../context/Context";
import { AddVideoToGenreButton } from "./Buttons/AddVideoToGenreButton";
import { DeleteVideoButton } from "./Buttons/DeleteVideoButton";
import { AddVideoToGenreForm } from "./Forms/AddVideoToGenreForm";
import { useToggleActive } from "../../../hooks/useToggleActive";

const VideoThumbnail = ({ id }) => {
  const { videos, setVideos, currentGenre } = useContext(Context);
  const [genresChecked, setGenresChecked] = useState({});
  const { isActive: formShowing, toggleActive: toggleFormShowing } =
    useToggleActive();
  const { isActive: videoShowing, toggleActive: toggleVideoShowing } =
    useToggleActive();

  const handleDelete = () => {
    console.log(id);
    const updatedVideos = { ...videos };

    if (currentGenre === "all") {
      for (const [genre] of Object.entries(updatedVideos)) {
        updatedVideos[genre].ids = updatedVideos[genre].ids.filter(
          (currId) => currId !== id
        );
      }
    } else {
      updatedVideos[currentGenre].ids = updatedVideos[currentGenre].ids.filter(
        (currId) => currId !== id
      );
    }

    setVideos(updatedVideos);
  };

  const handleAddVideoGenresForm = () => {
    const updatedVideos = { ...videos };

    for (const [genre, val] of Object.entries(genresChecked)) {
      const currentIds = updatedVideos?.[genre].ids;

      if (val) {
        if (!currentIds.includes(id)) {
          updatedVideos[genre].ids = [id, ...updatedVideos[genre].ids];
          setVideos(updatedVideos);
        }
      } else {
        if (currentIds.includes(id)) {
          updatedVideos[genre].ids = currentIds.filter(
            (currId) => currId !== id
          );
          setVideos(updatedVideos);
        }
      }
    }
    toggleFormShowing();
  };

  return (
    <section
      className={`${
        !videoShowing &&
        !formShowing &&
        "hover:scale-105 transition-all ease-in-out"
      } relative`}
    >
      <img
        onClick={toggleVideoShowing}
        className={
          "cursor-pointer rounded-2xl md:w-330 md:h-186 c-md:w-380 c-md:h-214 lg:w-460 lg:h-259 c-xl:w-560 c-xl:h-315"
        }
        src={`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`}
        alt="Youtube video thumbnail"
      />
      <section>
        <DeleteVideoButton
          handleDelete={handleDelete}
          currentGenre={currentGenre}
        />
        <AddVideoToGenreButton handleShowVideoGenresForm={toggleFormShowing} />
      </section>
      {videoShowing && <Video id={id} handleActive={toggleVideoShowing} />}
      {formShowing && (
        <AddVideoToGenreForm
          handleShowVideoGenresForm={toggleFormShowing}
          handleAddVideoGenresForm={handleAddVideoGenresForm}
          genresChecked={genresChecked}
          setGenresChecked={setGenresChecked}
          id={id}
        />
      )}
    </section>
  );
};

export default VideoThumbnail;
