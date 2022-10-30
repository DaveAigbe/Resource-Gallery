import { useContext, useEffect, useRef } from "react";
import { Context } from "../../../context/Context";
import { CloseVideoFormButton } from "../../Forms/Buttons/CloseVideoFormButton";

export const CategoryForm = ({ handleShowCategoryForm }) => {
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

  const focusInput = () => {
    inputRef.current.focus();
  };

  useEffect(() => {
    focusInput();
  }, []);

  return (
    <div
      className={
        "bg-gray-600/30 h-screen w-screen flex justify-center items-center fixed top-0 right-0 z-10"
      }
    >
      <form
        className={"relative bg-purple-300 rounded p-2.5 z-50"}
        onSubmit={handleSubmit}
      >
        <CloseVideoFormButton handleShowCategoryForm={handleShowCategoryForm} />
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
          />
          <button
            className={
              "text-white rounded bg-purple-600 p-2 px-3 font-bold shadow-md tracking-wide transition ease-in-out hover:bg-purple-700"
            }
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
};
