import React from "react";
import "../scss/Header.scss";

export default function Header({ headerText }) {
  return (
    <>
      <header className="top-header">
        <div>Header Component</div>
        <div>{headerText}</div>
      </header>
    </>
  );
}
