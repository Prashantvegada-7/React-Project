import css from "./FoodInput.module.css";

const FoodInput = ({ handleKeyDown }) => {
  return (
    <input
      className={css.xInput}
      type="text"
      placeholder="Enter Food Item Here..."
      onKeyDown={handleKeyDown}
    />
  );
};

export default FoodInput;
