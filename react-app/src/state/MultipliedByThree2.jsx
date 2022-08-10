import React, { useContext } from "react";
import { InputValueContext } from "../context/InputValueContext";

export default function MultipliedByThree() {
  const { state } = useContext(InputValueContext);

  return (
    <>
      <p>Multiplied number: {state.inputValue * 3}</p>
    </>
  );
}
