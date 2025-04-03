import Container from "./Components/Container";
import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import TodoItems from "./Components/TodoItems";
import WelcomeMessage from "./Components/WelcomeMessage";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

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
      <Container>
        <AppName />
        <AddTodo onNewItem={handleNewItem} />
        {todoItems.length === 0 && <WelcomeMessage />}
        <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem} />
      </Container>
    </>
  );
}

export default App;
