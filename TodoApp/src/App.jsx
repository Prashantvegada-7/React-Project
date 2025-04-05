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

  const handleNewItem = (todoName, dueDate) => {
    let newItems = [...todoItems, { name: todoName, dueDate: dueDate }];
    setTodoItems(newItems);
  };

  const handleDeleteItem = (todoName) => {
    let newTodoItems = todoItems.filter((test) => test.name != todoName);
    setTodoItems(newTodoItems);
  };

  return (
    <>
      <TodoItemsContext.Provider value={todoItems}>
        <Container>
          <AppName />
          <AddTodo onNewItem={handleNewItem} />
          <WelcomeMessage />
          <TodoItems onDeleteClick={handleDeleteItem} />
        </Container>
      </TodoItemsContext.Provider>
    </>
  );
}

export default App;
