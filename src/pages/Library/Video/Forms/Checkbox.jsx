import { titleCaseConverter } from "../../../../utils/titleCaseConverter";

export const Checkbox = ({
  genre,
  groupName,
  handleCheckbox,
  isChecked,
  register,
}) => {
  return (
    <li>
      <input
        type="checkbox"
        id={genre}
        value={genre}
        name={groupName}
        checked={isChecked}
        {...register(genre, { onChange: handleCheckbox })}
      />
      <label htmlFor={genre}> {titleCaseConverter(genre)}</label>
    </li>
  );
};
