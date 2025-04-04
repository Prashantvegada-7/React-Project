import { useState } from "react";
import HeadingName from "./Components/HeadingName";
import FoodInput from "./Components/FoodInput";
import FoodItems from "./Components/FoodItems";
import Container from "./Components/Container";
import ErrorMessage from "./Components/ErrorMessage";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  let [foodItems, setFoodItems] = useState([]);

  const handleKeyDown = (event) => {
    if (event.target.value.length > 0) {
      if (event.key === "Enter") {
        let newFoodItems = event.target.value;
        event.target.value = "";
        let newItems = [...foodItems, newFoodItems];
        setFoodItems(newItems);
      }
    }
  };

  return (
    <>
      <Container>
        <h1>hey</h1>
        <HeadingName />
        <FoodInput handleKeyDown={handleKeyDown} />
        <ErrorMessage foodItems={foodItems} />
        <FoodItems foodItems={foodItems} />
      </Container>
    </>
  );
}

export default App;
