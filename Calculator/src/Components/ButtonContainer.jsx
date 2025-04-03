import css from "./ButtonContainer.module.css";

const ButtonContainer = ({ onButtonClick }) => {
  const buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "5",
    "-",
    "6",
    "8",
    "7",
    "*",
    "9",
    "0",
    "/",
    "=",
  ];

  return (
    <div className={css.xContainer}>
      {buttonNames.map((buttonName) => (
        <button
          className={css.xButton}
          onClick={() => onButtonClick(buttonName)}
        >
          {buttonName}
        </button>
      ))}
    </div>
  );
};

export default ButtonContainer;
