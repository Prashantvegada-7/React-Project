import Container from "./Components/Container";
import Display from "./Components/Display";
import ButtonContainer from "./Components/ButtonContainer";
import "./App.css";
import { useState } from "react";

function App() {
  let [calVal, setCalVal] = useState("");

  const onButtonClick = (buttonName) => {
    if (buttonName === "C") {
      setCalVal("");
    } else if (buttonName === "=") {
      let result = eval(calVal);
      setCalVal(result);
    } else {
      let newValue = calVal + buttonName;
      setCalVal(newValue);
    }
  };

  return (
    <>
      <Container>
        <Display displayValue={calVal} />
        <ButtonContainer onButtonClick={onButtonClick} />
      </Container>
    </>
  );
}

export default App;
