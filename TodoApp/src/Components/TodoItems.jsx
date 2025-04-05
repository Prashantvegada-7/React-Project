import css from "./TodoItems.module.css";
import TodoItem from "./TodoItem";
import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-item-store";

const TodoItems = ({ onDeleteClick }) => {
  const todoItems = useContext(TodoItemsContext);

  return (
    <div className={css.xContainer}>
      {todoItems.map((item) => (
        <TodoItem
          key={item.name}
          todoName={item.name}
          todoDate={item.dueDate}
          onDeleteClick={onDeleteClick}
        />
      ))}
    </div>
  );
};

export default TodoItems;
