import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-item-store";

const TodoItem = ({ todoName, todoDate }) => {
  const { DeleteItem } = useContext(TodoItemsContext);

  return (
    <div className="container">
      <div className="row xRow">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            className="btn btn-danger xButton"
            onClick={() => DeleteItem(todoName)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
