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
import CalculationOverview from "./state/CalculationOverview3";
import InputNumber from "./state/InputNumber3";

export default function App() {

  return (
    <>
      <h2>Multiplied by two App</h2>

      <InputNumber />

      <CalculationOverview />
    </>
  );
}
