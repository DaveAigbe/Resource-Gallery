import { useContext, useEffect } from "react";
import { Context } from "../../../../context/Context";
import { CloseFormButton } from "../../../../components/CloseFormButton";
import { FormBackground } from "../../../../components/FormBackground";
import { SubmitFormButton } from "../../../../components/SubmitFormButton";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export const AddGenreForm = ({ handleShowGenreForm }) => {
  const { videos, setVideos } = useContext(Context);

  const schema = yup.object().shape({
    genre: yup.string().required("genre must have a name."),
  });
  const { register, handleSubmit, setFocus } = useForm({
    resolver: yupResolver(schema),
  });

  const handleSubmitGenre = (data) => {
    const genreName = data.genre.toLowerCase();

    if (!videos[genreName]) {
      const updatedVideos = { ...videos, [genreName]: { ids: [] } };
      setVideos(updatedVideos);
      handleShowGenreForm();
    } else {
      alert("Existing genre cannot be re-added.");
    }
  };

  useEffect(() => {
    setFocus("genre");
  }, [setFocus]);

  return (
    <FormBackground closeForm={handleShowGenreForm}>
      <form
        className={"relative bg-purple-300 rounded p-2.5 z-50"}
        onSubmit={handleSubmit(handleSubmitGenre)}
      >
        <label className={"text-gray-700 block text-sm mb-2"} htmlFor="genre">
          New genre
        </label>
        <div className={"flex gap-2"}>
          <input
            id={"genre"}
            className={
              "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-400 focus:shadow-outline"
            }
            type="text"
            placeholder={"Enter genre name..."}
            autoComplete={"off"}
            {...register("genre")}
          />
          <SubmitFormButton text={"Create"} />
          <CloseFormButton handleShowForm={handleShowGenreForm} />
        </div>
      </form>
    </FormBackground>
  );
};
