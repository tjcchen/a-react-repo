/**
 * Passing a function from parent component
 *
 * Prop drilling is the unofficial term for passing data through several nested children components,
 * in a bid to deliver this data to a deeply-nested component.
 * The problem with this approach is that most of the components through which
 * this data is passed have no actual need for this data.
 *
 */

import React from "react";

export default function InputNumber({ setInputValue }) {
  return (
    <input type="number" onChange={(e) => setInputValue(e.target.value)} />
  );
}
