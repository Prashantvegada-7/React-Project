import { useRef, useState } from "react";
import css from "./AddTodo.module.css";

const AddTodo = ({ onNewItem }) => {
  const [todoName, setTodoName] = useState();
  const [dueDate, setDueDate] = useState();

  const todoNameElement = useRef();
  const todoDateElement = useRef();

  const handleAddButton = (event) => {
    event.preventDefault();
    let todoName = todoNameElement.current.value;
    let dueDate = todoDateElement.current.value;
    todoNameElement.current.value = "";
    todoDateElement.current.value = "";
    onNewItem(todoName, dueDate);
  };

  return (
    <form className="container  mb-3" onSubmit={handleAddButton}>
      <div className="row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter items here..."
            className={css.xInput}
            ref={todoNameElement}
          />
        </div>
        <div className="col-4">
          <input type="date" className={css.xInput} ref={todoDateElement} />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-success xButton">
            Add
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddTodo;
