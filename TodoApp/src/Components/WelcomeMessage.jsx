import { useContext } from "react";
import css from "./WelcomeMessage.module.css";
import { TodoItemsContext } from "../store/todo-item-store";

const WelcomeMessage = () => {
  const todoItems = useContext(TodoItemsContext);

  return (
    <>
      {todoItems.length === 0 && (
        <div className={`alert alert-danger ${css.alert}`}>
          Enjoy Your Day !
        </div>
      )}
    </>
  );
};

export default WelcomeMessage;
