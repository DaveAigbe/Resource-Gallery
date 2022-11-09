import { FormBackground } from "../../../Background/FormBackground";
import { CloseFormButton } from "../../../Layout/Buttons/CloseFormButton";
import { Checkbox } from "./Checkbox";
import { Fragment, useContext, useEffect } from "react";
import { Context } from "../../../../context/Context";
import { SubmitFormButton } from "../../../Layout/Buttons/SubmitFormButton";
import { useForm } from "react-hook-form";

export const AddVideoCategoriesForm = ({
  handleAddVideoCategoriesForm,
  handleShowVideoCategoriesForm,
  categoriesChecked,
  setCategoriesChecked,
  id,
}) => {
  const { videos } = useContext(Context);
  const { register, handleSubmit, getValues } = useForm();

  useEffect(() => {
    (function () {
      let obj = {};
      for (const category of Object.keys(videos)) {
        if (category !== "all") {
          obj[category] = videos[category].ids.includes(id);
        }
      }
      setCategoriesChecked(obj);
    })();
  }, []);

  const handleCheckbox = () => {
    setCategoriesChecked(getValues());
  };

  return (
    <FormBackground>
      <form
        className={"relative bg-purple-300 rounded py-2.5 pl-2.5 pr-16 z-20"}
        onSubmit={handleSubmit(handleAddVideoCategoriesForm)}
      >
        <fieldset>
          <legend>Add video to existing categories</legend>
        </fieldset>
        <ul className={"my-2"}>
          {categoriesChecked &&
            Object.keys(categoriesChecked).map((category) => {
              return (
                <Fragment key={category}>
                  <Checkbox
                    category={category}
                    groupName={"categories"}
                    handleCheckbox={handleCheckbox}
                    isChecked={categoriesChecked?.[category]}
                    register={register}
                  />
                </Fragment>
              );
            })}
        </ul>
        <SubmitFormButton text={"Submit"} />
        <CloseFormButton handleShowForm={handleShowVideoCategoriesForm} />
      </form>
    </FormBackground>
  );
};
