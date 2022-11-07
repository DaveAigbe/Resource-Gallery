export const Checkbox = ({ value, groupName, handleCheckbox, isChecked }) => {
  return (
    <li>
      <input
        onChange={handleCheckbox}
        type="checkbox"
        id={value}
        value={value}
        name={groupName}
        checked={isChecked}
      />
      <label htmlFor={value}> {value.toUpperCase()}</label>
    </li>
  );
};
