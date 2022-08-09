import React from "react";
// import MultipliedByThree from "./MultipliedByThree";
// import MultipliedByTwo from "./MultipliedByTwo";

export default function MultipliedCalculations({ children }) {

  console.log('children: ');
  console.log(children);

  return (
    <>
      {/* Multiplied by Two */}
      {/* <MultipliedByTwo inputValue={inputValue} /> */}

      {/* Multiplied by Three */}
      {/* <MultipliedByThree inputValue={inputValue} /> */}

      {children}
    </>
  );
}
