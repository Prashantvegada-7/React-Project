import css from "./Container.module.css";

const Container = ({ children }) => {
  return <div className={`${css.xContainer} shadow-lg`}>{children}</div>;
};

export default Container;
