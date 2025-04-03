import css from "./Display.module.css";

const Display = ({ displayValue }) => {
  return (
    <input className={css.xInput} type="text" value={displayValue} readOnly />
  );
};

export default Display;
