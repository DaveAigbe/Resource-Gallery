export const Checkbox = ({
  category,
  groupName,
  handleCheckbox,
  isChecked,
  register,
}) => {
  return (
    <li>
      <input
        type="checkbox"
        id={category}
        value={category}
        name={groupName}
        checked={isChecked}
        {...register(category, { onChange: handleCheckbox })}
      />
      <label htmlFor={category}> {category.toUpperCase()}</label>
    </li>
  );
};
