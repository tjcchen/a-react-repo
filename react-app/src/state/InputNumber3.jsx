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
import { useDispatch } from "react-redux";
import { setCount } from "../redux/slices/countSlice";

export default function InputNumber() {
  const dispatch = useDispatch();

  return (
    <input type="number" onChange={(e) => dispatch(setCount(e.target.value))} />
  );
}
