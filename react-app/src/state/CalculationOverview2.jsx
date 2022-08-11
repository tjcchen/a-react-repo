import React, { useContext } from "react";
import MultipliedCalculations from "./MultipliedCalculations2";
import { InputValueContext } from "../context/InputValueContext";

export default function CalculationOverview() {
  const { dispatch } = useContext(InputValueContext);

  return (
    <>
      <MultipliedCalculations />

      <button
        onClick={() =>
          dispatch({ type: "SET_INPUT_VALUE_TO_100" })
        }
      >
        Set multiplied number to 100
      </button>
    </>
  );
}
