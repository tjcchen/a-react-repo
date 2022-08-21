/**
 * CSS Modules
 * - Comes with Create React App
 * - Simply name files "[name].module.scss" instead of "[name].scss"
 * - Prevents specificity problem
 * 1) Unique "hash"
 */
import React from "react";
// [IMPORTANT] using scoped scss
import styles from "../scss/Header.module.scss";

export default function Header({ headerText }) {
  return (
    <>
      <header className={styles.header}>
        <div>Header Component</div>
        <div>{headerText}</div>
      </header>
    </>
  );
}
