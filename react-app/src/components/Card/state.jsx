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

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Increment Counter</button>
      <p>{count}</p>
    </>
  );
}
