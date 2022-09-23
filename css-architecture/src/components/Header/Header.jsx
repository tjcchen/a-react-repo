import React from "react";
import styles from "./Header.module.scss";

export default function Header({ text = "" }) {
  return (
    <>
      <header onClick={() => console.log(text)}>
        {text}
        <div class={styles.extraText}>Some extra text</div>
      </header>
    </>
  );
}
