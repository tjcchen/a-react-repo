/**
 * Basic State
 * - State = data stored in an app at a specific time
 * - useState Hook
 *   Hook = functions that 'hooks into' your component
 * - Using the React Developer Tools to check state
 *
 * - Counter & Toggle
 *   prevState
 */

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);

  /**
   * This function only increments 2 to counter
   */
  const onClick = () => {
    setCount(count + 10);
    // ...
    setCount(count + 2);
  };

  /**
   * This function works fine
   */
  const onClickWithPrevState = () => {
    setCount((prevState) => prevState + 10);
    // ...
    setCount((prevState) => prevState + 2);
  };

  return (
    <>
      {/* Counter */}
      <button onClick={onClick}>Increment Counter</button>
      <button onClick={onClickWithPrevState}>
        Increment Counter with PrevState
      </button>
      <p>{count}</p>
      {/* Toggle */}
      <button onClick={() => setToggle((prevState) => !prevState)}>
        Reverse Toggle
      </button>
      <p>{toggle ? "ON" : "OFF"}</p>
    </>
  );
}
