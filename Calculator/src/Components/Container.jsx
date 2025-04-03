import css from "./Container.module.css";

const Container = ({ children }) => {
  return <div className={css.xContainer}>{children}</div>;
};

export default Container;
