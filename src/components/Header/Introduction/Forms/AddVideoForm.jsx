import React, { useContext } from "react";
import { Context } from "../../../../context/Context";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const AddVideoForm = () => {
  const { videos, setVideos } = useContext(Context);
  const schema = yup.object().shape({
    videoId: yup.string().length(11, "⚠ ID must be 11 characters").required(),
  });

  const { register, handleSubmit, setValue } = useForm({
    resolver: yupResolver(schema),
  });

  const handleSubmitVideo = (data) => {
    const newVideoId = data.videoId;

    if (!videos.all.ids.includes(newVideoId)) {
      const updatedIds = [newVideoId, ...videos.all.ids];
      const updatedVideos = { ...videos, all: { ids: updatedIds } };

      setVideos(updatedVideos);
    } else {
      alert("Video already exists!");
    }

    setValue("videoId", "");
  };

  return (
    <form
      className={"flex flex-col gap-4 justify-center items-center text-black"}
      onSubmit={handleSubmit(handleSubmitVideo)}
    >
      <input
        type="text"
        className={"bg-white p-4 rounded w-full md:w-96 h-14 "}
        placeholder={"ID"}
        {...register("videoId")}
      />
      {/*<span className={"text-red-600"}>{errors.videoId?.message}</span>*/}
      <button
        type={"submit"}
        className={
          "text-black bg-purple-300 rounded w-full md:w-96 h-14  hover:bg-purple-500 hover:animate-pulse hover:translate-y-0.5 hover:translate-x-0.5 shadow-lg shadow-purple-600 transition duration-300 ease-in-out font-bold"
        }
      >
        Save Video
      </button>
    </form>
  );
};

export default AddVideoForm;
