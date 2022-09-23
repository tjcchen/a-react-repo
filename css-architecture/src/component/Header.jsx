import React from "react";

export default function Header({ text = "" }) {
  return (
    <>
      <header onClick={() => console.log(text)}>{text}</header>
    </>
  );
}
