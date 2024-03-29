/**
 * Context API
 * - Global vs local state
 * - Context + useReducer Hook (get & set data)
 *
 * - Props vs Component Composition vs Context
 *   spoiler: very limited use cases for global state
 */

import { InputValueProvider } from "./context/InputValueContext";
import CalculationOverview from "./state/CalculationOverview2";
import InputNumber from "./state/InputNumber2";

export default function App() {
  return (
    <>
      <h1>Multiplied by three App</h1>

      {/* InputValueProvider can share state among different nested children components */}
      <InputValueProvider>
        <InputNumber />

        <CalculationOverview />
      </InputValueProvider>
    </>
  );
}
