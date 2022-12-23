import { FormBackground } from "../../../../components/FormBackground";
import { CloseFormButton } from "../../../../components/CloseFormButton";
import { Checkbox } from "./Checkbox";
import { Fragment, useContext, useEffect } from "react";
import { Context } from "../../../../context/Context";
import { SubmitFormButton } from "../../../../components/SubmitFormButton";
import { useForm } from "react-hook-form";

export const AddVideoToGenreForm = ({
  handleAddVideoGenresForm,
  handleShowVideoGenresForm,
  genresChecked,
  setGenresChecked,
  id,
}) => {
  const { videos } = useContext(Context);
  const { register, handleSubmit, getValues } = useForm();

  useEffect(() => {
    (function () {
      let obj = {};
      for (const genre of Object.keys(videos)) {
        if (genre !== "all") {
          obj[genre] = videos[genre].ids.includes(id);
        }
      }
      setGenresChecked(obj);
    })();
  }, []);

  const handleCheckbox = () => {
    setGenresChecked(getValues());
  };

  return (
    <FormBackground closeForm={handleShowVideoGenresForm}>
      <form
        className={"relative bg-purple-300 rounded py-2.5 pl-2.5 pr-16 z-20"}
        onSubmit={handleSubmit(handleAddVideoGenresForm)}
      >
        <fieldset>
          <legend>Add video to existing genres</legend>
        </fieldset>
        <ul className={"my-2"}>
          {genresChecked &&
            Object.keys(genresChecked).map((genre) => {
              return (
                <Fragment key={genre}>
                  <Checkbox
                    genre={genre}
                    groupName={"genres"}
                    handleCheckbox={handleCheckbox}
                    isChecked={genresChecked?.[genre]}
                    register={register}
                  />
                </Fragment>
              );
            })}
        </ul>
        <SubmitFormButton text={"Submit"} />
        <CloseFormButton handleShowForm={handleShowVideoGenresForm} />
      </form>
    </FormBackground>
  );
};
