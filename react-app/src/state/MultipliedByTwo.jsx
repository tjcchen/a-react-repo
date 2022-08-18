/**
 * Props
 * - Props = properties
 * - Great way to share data and functions between components
 *
 * - Lifting state up
 * - Prop Drilling
 * 
 * Passing a props from parent component, we actually have all the data stored in props
 *
 */
import React from "react";
import { useSelector } from "react-redux";

export default function MultipliedByTwo() {
  const count = useSelector((state) => state.count.value);

  return (
    <>
      <p>Multiplied number: {count * 2}</p>
    </>
  );
}
