import Container from "./Components/Container";
import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import TodoItems from "./Components/TodoItems";
import WelcomeMessage from "./Components/WelcomeMessage";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { TodoItemsContext } from "../src/store/todo-item-store";

function App() {
  let [todoItems, setTodoItems] = useState([]);

  const addNewItem = (todoName, dueDate) => {
    let newItems = [...todoItems, { name: todoName, dueDate: dueDate }];
    setTodoItems(newItems);
  };

  const DeleteItem = (todoName) => {
    let newTodoItems = todoItems.filter((test) => test.name != todoName);
    setTodoItems(newTodoItems);
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
