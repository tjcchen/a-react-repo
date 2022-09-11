/**
 * React Profiler
 * - The Profiler measures how often a React application renders and what the "cost" of rendering is.
 *   Its purpose is to help identify parts of an application that are slow and may benefit from optimiztions
 *   such as memoization.
 * - You'll need the React DevTools extension (Chrome) to use the "DevTools profiler plugin"
 * - Works perfect together with @welldone-software/why-did-you-render library
 */

import React, { useState } from "react";

export default function Profiler() {
  const [uselessValue, setUselessValue] = useState(0);

  function ParentComponent() {
    return (
      <>
        <ChildComponentA
          uselessValue={uselessValue}
          setUselessValue={setUselessValue}
        />
        <ChildComponentB />
      </>
    );
  }

  function ChildComponentA({ uselessValue, setUselessValue }) {
    console.log("child a rendered");
    return (
      <>
        <p>child A - {uselessValue}</p>
        <button
          type="button"
          onClick={() => setUselessValue((prevState) => prevState + 1)}
        >
          Increase Count
        </button>
      </>
    );
  }

  const ChildComponentB = React.memo(function ChildComponentB() {
    console.log("child b rendered");
    return (
      <>
        <p>child B</p>
      </>
    );
  });

  return (
    <>
      <div>React Profiler</div>
      <ParentComponent />
    </>
  );
}
