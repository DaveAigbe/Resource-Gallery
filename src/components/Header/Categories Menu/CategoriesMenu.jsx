import React, { useContext, useState } from "react";
import { Context } from "../../../context/Context";
import CategoryButton from "./Buttons/CategoryButton";
import { CategoryForm } from "./Forms/CategoryForm";
import { NewCategoryButton } from "./Buttons/NewCategoryButton";

export const CategoriesMenu = () => {
  const { videos, currentCategory } = useContext(Context);
  const [showForm, setShowForm] = useState(false);

  const handleShowCategoryForm = () => {
    setShowForm((prevState) => {
      return !prevState;
    });
  };

  return (
    <section
      className={"hidden sm:flex absolute top-5 text-xl gap-4 items-center"}
    >
      {Object.keys(videos).map((category) => {
        return (
          <React.Fragment key={category}>
            <CategoryButton
              category={category}
              count={videos[category].ids.length}
              isCurrentCategory={category === currentCategory}
            />
          </React.Fragment>
        );
      })}
      <NewCategoryButton handleShowCategoryForm={handleShowCategoryForm} />
      {showForm && (
        <CategoryForm handleShowCategoryForm={handleShowCategoryForm} />
      )}
    </section>
  );
};
