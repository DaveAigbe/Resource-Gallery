import React, { useContext } from "react";
import { Context } from "../../context/Context";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {MainButton} from '../../components/MainButton';

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
      <MainButton content={'Save Video'}/>
    </form>
  );
};

export default AddVideoForm;
