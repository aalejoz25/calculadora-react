import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Button from "./components/Button";
import Screen from "./components/Screen";
import ClearButton from "./components/ClearButton";
import "./App.css";
import { evaluate } from "mathjs";

function App() {
  const [input, setInput] = useState("");

  const addInput = (val) => {
    if (
      input.length == 0 &&
      (val == "+" || val == "-" || val == "*" || val == "/" || val == ".")
    ) {
      alert("Ingrese primero un numero");
    } else if (
      (input.charAt(input.length - 1) == "+" ||
        input.charAt(input.length - 1) == "-" ||
        input.charAt(input.length - 1) == "*" ||
        input.charAt(input.length - 1) == "/" ||
        input.charAt(input.length - 1) == ".") &&
      (val == "+" || val == "-" || val == "*" || val == "/" || val == ".")
    ) {
      alert("No insgrese dos operadores seguidos");
    } else {
      setInput(input + val);
    }
  };
  const calcResult = () => {
    if (input) {
      setInput(evaluate(input).toString());
    } else {
      alert("Porfavor ingrese valores");
    }
  };

  return (
    <div className="App">
      <div className="logo-contenedor">
        <img className="logo" src={reactLogo} alt="App logo" />
      </div>
      <div className="contenedor-calculadora">
        <Screen input={input}></Screen>
        <div className="fila">
          <Button manejarClic={addInput}>1</Button>
          <Button manejarClic={addInput}>2</Button>
          <Button manejarClic={addInput}>3</Button>
          <Button manejarClic={addInput}>+</Button>
        </div>
        <div className="fila">
          <Button manejarClic={addInput}>4</Button>
          <Button manejarClic={addInput}>5</Button>
          <Button manejarClic={addInput}>6</Button>
          <Button manejarClic={addInput}>-</Button>
        </div>
        <div className="fila">
          <Button manejarClic={addInput}>7</Button>
          <Button manejarClic={addInput}>8</Button>
          <Button manejarClic={addInput}>9</Button>
          <Button manejarClic={addInput}>*</Button>
        </div>
        <div className="fila">
          <Button manejarClic={calcResult}>=</Button>
          <Button manejarClic={addInput}>0</Button>
          <Button manejarClic={addInput}>.</Button>
          <Button manejarClic={addInput}>/</Button>
        </div>
        <div className="fila">
          <ClearButton handleClear={() => setInput("")}>Clear</ClearButton>
        </div>
      </div>
    </div>
  );
}

export default App;
