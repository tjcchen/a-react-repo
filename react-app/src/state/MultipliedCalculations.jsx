import React from "react";
import MultipliedByThree from "./MultipliedByThree";
import MultipliedByTwo from "./MultipliedByTwo";

export default function MultipliedCalculations({ inputValue }) {
  return (
    <>
      {/* Multiplied by Two */}
      {/* <MultipliedByTwo inputValue={inputValue} /> */}

      {/* Multiplied by Three */}
      <MultipliedByThree inputValue={inputValue} />
    </>
  );
}
