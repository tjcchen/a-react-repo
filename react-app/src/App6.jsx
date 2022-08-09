/**
 * Context API
 * - Global vs local state
 * - Context + useReducer Hook (get & set data)
 *
 * - Props vs Component Composition vs Context
 *   spoiler: very limited use cases for global state
 */

import { useState } from "react";
import CalculationOverview from "./state/CalculationOverview2";
import InputNumber from "./state/InputNumber";

export default function App() {
  const [inputValue, setInputValue] = useState(0);

  return (
    <>
      <h1>Multiplied by three App</h1>

      <InputNumber setInputValue={setInputValue} />

      <CalculationOverview inputValue={inputValue} />
    </>
  );
}
