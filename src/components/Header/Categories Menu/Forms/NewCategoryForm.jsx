import { useContext, useRef } from "react";
import { Context } from "../../../../context/Context";
import { CloseFormButton } from "../../../Layout/Buttons/CloseFormButton";
import { FormBackground } from "../../../Background/FormBackground";
import { SubmitFormButton } from "../../../Layout/Buttons/SubmitFormButton";

export const NewCategoryForm = ({ handleShowCategoryForm }) => {
  const { videos, setVideos } = useContext(Context);
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const categoryName = inputRef.current.value.toLowerCase();

    if (!videos[categoryName]) {
      const updatedVideos = { ...videos, [categoryName]: { ids: [] } };
      setVideos(updatedVideos);
      handleShowCategoryForm();
    } else {
      alert("Existing category cannot be re-added.");
    }
  };

  return (
    <FormBackground>
      <form
        className={"relative bg-purple-300 rounded p-2.5 z-50"}
        onSubmit={handleSubmit}
      >
        <label
          className={"text-gray-700 block text-sm mb-2"}
          htmlFor="category"
        >
          New Category
        </label>
        <div className={"flex gap-2"}>
          <input
            ref={inputRef}
            id={"category"}
            className={
              "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-400 focus:shadow-outline"
            }
            type="text"
            placeholder={"Enter category name..."}
            autoComplete={"off"}
            autoFocus={true}
          />
          <SubmitFormButton text={"Create"} />
          <CloseFormButton handleShowForm={handleShowCategoryForm} />
        </div>
      </form>
    </FormBackground>
  );
};
