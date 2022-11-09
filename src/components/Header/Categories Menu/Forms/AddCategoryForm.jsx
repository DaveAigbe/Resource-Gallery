import { useContext, useEffect } from "react";
import { Context } from "../../../../context/Context";
import { CloseFormButton } from "../../../Layout/Buttons/CloseFormButton";
import { FormBackground } from "../../../Background/FormBackground";
import { SubmitFormButton } from "../../../Layout/Buttons/SubmitFormButton";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export const AddCategoryForm = ({ handleShowCategoryForm }) => {
  const { videos, setVideos } = useContext(Context);

  const schema = yup.object().shape({
    category: yup.string().required("Category must have a name."),
  });
  const { register, handleSubmit, setFocus } = useForm({
    resolver: yupResolver(schema),
  });

  const handleSubmitCategory = (data) => {
    const categoryName = data.category.toLowerCase();

    if (!videos[categoryName]) {
      const updatedVideos = { ...videos, [categoryName]: { ids: [] } };
      setVideos(updatedVideos);
      handleShowCategoryForm();
    } else {
      alert("Existing category cannot be re-added.");
    }
  };

  useEffect(() => {
    setFocus("category");
  }, [setFocus]);

  return (
    <FormBackground>
      <form
        className={"relative bg-purple-300 rounded p-2.5 z-50"}
        onSubmit={handleSubmit(handleSubmitCategory)}
      >
        <label
          className={"text-gray-700 block text-sm mb-2"}
          htmlFor="category"
        >
          New Category
        </label>
        <div className={"flex gap-2"}>
          <input
            id={"category"}
            className={
              "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-400 focus:shadow-outline"
            }
            type="text"
            placeholder={"Enter category name..."}
            autoComplete={"off"}
            {...register("category")}
          />
          <SubmitFormButton text={"Create"} />
          <CloseFormButton handleShowForm={handleShowCategoryForm} />
        </div>
      </form>
    </FormBackground>
  );
};
