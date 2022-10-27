import React, { useContext, useState } from "react";
import { Context } from "../../context/Context";
import CategoryButton from "./CategoryButton";
import { Icon } from "@iconify/react";
import { CategoryForm } from "./CategoryForm";

export const CategoriesList = () => {
  const { videos } = useContext(Context);
  const [showForm, setShowForm] = useState(false);

  const handleCategoryForm = () => {
    setShowForm((prevState) => {
      return !prevState;
    });
  };

  return (
    <section className={"hidden sm:flex absolute top-5 text-xl gap-4"}>
      {Object.keys(videos).map((category) => {
        return (
          <React.Fragment key={category}>
            <CategoryButton category={category} />
          </React.Fragment>
        );
      })}
      <Icon
        onClick={handleCategoryForm}
        className={
          "text-4xl text-white self-center hover:text-green-400 transition-all ease-in-out cursor-pointer"
        }
        icon="ant-design:plus-square-twotone"
      />
      {showForm && <CategoryForm />}
    </section>
  );
};
