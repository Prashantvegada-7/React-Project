import css from "./WelcomeMessage.module.css";

const WelcomeMessage = () => {
  return (
    <div className={`alert alert-danger ${css.alert}`}>Enjoy Your Day !</div>
  );
};

export default WelcomeMessage;
