import React from "react";

export default function MultipliedByThree({ inputValue = 0 }) {
  return (
    <>
      <p>Multiplied number: {inputValue * 3}</p>
    </>
  );
}
