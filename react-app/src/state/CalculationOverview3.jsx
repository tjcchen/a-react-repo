import React from "react";
import MultipliedByTwo from "./MultipliedByTwo";

export default function CalculationOverview({ inputValue }) {
  return (
    <>
      {/* Multiplied by Two */}
      <MultipliedByTwo inputValue={inputValue} />
    </>
  );
}
