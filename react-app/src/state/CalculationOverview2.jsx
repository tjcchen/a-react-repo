/**
 * Props vs Component Composition vs Context
 * - By default use Props
 * - If Prop drilling becomes a problem => use Component Composition
 * - If Component Composition becomes a problem => use Context
 * 
 * Use cases for Context are limited
 * - Auth / Locale(Language) / UI Theme / Analytics - providers
 * - Context Problems
 *   Re-render problems( can be fixed )
 *   Reuse of components is harder
 *   Added complexity
 */

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
