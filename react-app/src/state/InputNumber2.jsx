/**
 * Passing a function from parent component
 *
 * Prop drilling is the unofficial term for passing data through several nested children components,
 * in a bid to deliver this data to a deeply-nested component.
 * The problem with this approach is that most of the components through which
 * this data is passed have no actual need for this data.
 *
 */

import React, { useContext } from "react";
import { InputValueContext } from "../context/InputValueContext";

export default function InputNumber() {
  const { dispatch } = useContext(InputValueContext);

  return (
    <input
      type="number"
      onChange={(e) =>
        dispatch({ type: "SET_INPUT_VALUE", payload: e.target.value })
      }
    />
  );
}
