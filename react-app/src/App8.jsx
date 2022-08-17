import { useState } from "react";
import CalculationOverview from "./state/CalculationOverview3";
import InputNumber from "./state/InputNumber";

export default function App() {
  const [inputValue, setInputValue] = useState(0);

  return (
    <>
      <h2>Multiplied by two App</h2>

      <InputNumber setInputValue={setInputValue} />

      <CalculationOverview inputValue={inputValue} />
    </>
  );
}
