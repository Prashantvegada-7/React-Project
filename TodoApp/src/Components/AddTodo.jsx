import { useState } from "react";
import css from "./AddTodo.module.css";

const AddTodo = ({ onNewItem }) => {
  const [todoName, setTodoName] = useState();
  const [dueDate, setDueDate] = useState();

  const handleChangeName = () => {
    setTodoName(event.target.value);
  };

  const handleDateName = () => {
    setDueDate(event.target.value);
  };

  const handleAddButton = () => {
    onNewItem(todoName, dueDate);
    setTodoName("");
    setDueDate("");
  };

  return (
    <div className="container  mb-3">
      <div className="row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter items here..."
            className={css.xInput}
            value={todoName}
            onChange={handleChangeName}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            className={css.xInput}
            value={dueDate}
            onChange={handleDateName}
          />
        </div>
        <div className="col-2">
          <button className="btn btn-success xButton" onClick={handleAddButton}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
