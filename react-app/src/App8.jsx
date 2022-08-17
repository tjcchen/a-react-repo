/**
 * Using Redux
 * - It's recommended to use Redux Toolkit
 *  `npm install @reduxjs/toolkit react-redux`
 * 
 * - Create a store
 * - Provide the store to the App Component
 * - Create a Redux State Slice
 * - Add Slice Reducers to the Store
 * - Use React-Redux hooks to get/set data
 *   Get: useSelector()
 *   Set: useDispatch()
 */
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
