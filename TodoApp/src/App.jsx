import Container from "./Components/Container";
import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import TodoItems from "./Components/TodoItems";
import WelcomeMessage from "./Components/WelcomeMessage";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useReducer, useState } from "react";
import { TodoItemsContext } from "../src/store/todo-item-store";

const TodoItemsReducer = (currentTodoItems, action) => {
  let newItems = currentTodoItems;
  if (action.type === "NEW_ITEM") {
    newItems = [
      ...currentTodoItems,
      { name: action.payload.todoName, dueDate: action.payload.dueDate },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newItems = currentTodoItems.filter(
      (item) => item.name !== action.payload.todoName
    );
  }

  return newItems;
};

function App() {
  const [todoItems, dispatchTodoItems] = useReducer(TodoItemsReducer, []);

  const addNewItem = (todoName, dueDate) => {
    const newActionItem = {
      type: "NEW_ITEM",
      payload: {
        todoName,
        dueDate,
      },
    };
    dispatchTodoItems(newActionItem);
  };

  const DeleteItem = (todoName) => {
    const deleteActionItem = {
      type: "DELETE_ITEM",
      payload: {
        todoName,
      },
    };

    dispatchTodoItems(deleteActionItem);
  };

  return (
    <>
      <TodoItemsContext.Provider
        value={{
          todoItems,
          addNewItem,
          DeleteItem,
        }}
      >
        <Container>
          <AppName />
          <AddTodo />
          <WelcomeMessage />
          <TodoItems />
        </Container>
      </TodoItemsContext.Provider>
    </>
  );
}

export default App;
