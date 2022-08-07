/**
 * Passing a function from parent component
 */

import React from "react";

export default function InputNumber({ setInputValue }) {
  return (
    <input type="number" onChange={(e) => setInputValue(e.target.value)} />
  );
}
