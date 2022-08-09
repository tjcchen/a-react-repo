/**
 * State Management Intro
 * - State management = state of data in an App
 *
 * Two kinds of state
 * - UI State( local, eg: light/dard mode, modal open/closed )
 * - Server cache( API, eg: list of users )
 *
 * State can be locally and globally
 *
 * What can you use for state management?
 * UI State:
 * - Props
 * - Component Composition
 * - Context API
 *
 * Server Cache
 * - React query, axios
 *
 * Only use a state management library if you really need to( 95% case you dont need ), like:
 * - Redux, Recoil, Jotai, Mobx, Zustand etc.
 * Redux: https://redux.js.org/
 * Recoil: https://github.com/facebookexperimental/Recoil
 * Jotai: https://github.com/pmndrs/jotai
 * Mobx: https://github.com/mobxjs/mobx
 * Zustand: https://github.com/pmndrs/zustand
 *
 * Component Composition
 * - Composing components together
 * - Way to prevent prop drilling
 *
 * - Shortcomings( can be hard to use ):
 *   a) You need to nest a lot of components( wrapper hell )
 *   b) Data needs to be accessible by many components at all different nesting levels
 */

import { useState } from "react";
import CalculationOverview from "./state/CalculationOverview";
import InputNumber from "./state/InputNumber";
import MultipliedByTwo from "./state/MultipliedByTwo";
import MultipliedCalculations from "./state/MultipliedCalculations";

export default function App() {
  const [inputValue, setInputValue] = useState(0);

  return (
    <>
      <h1>Multiplied by two App</h1>
      <InputNumber setInputValue={setInputValue} />
      {/* <MultipliedByTwo inputValue={inputValue} /> */}
      {/* <CalculationOverview inputValue={inputValue} /> */}

      {/* Component Composition */}
      {/* Replace props drilling with children */}
      <CalculationOverview>
        <MultipliedCalculations>
          <MultipliedByTwo inputValue={inputValue} />
        </MultipliedCalculations>
      </CalculationOverview>
    </>
  );
}
