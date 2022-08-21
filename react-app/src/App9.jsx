/**
 * Styling Intro
 * - Styling options
 * 1) CSS/SCSS ( Specificity Problems )
 * 2) CSS Modules
 * 3) Styled Components / Emotion
 *
 * Other:
 * - Component Libraries( Eg: Material UI, Ant Design )
 * - CSS Frameworks( Eg: Tailwind, Sematic UI )
 *
 * ============================================
 * CSS Modules vs Styled Components
 * CSS Modules
 * - Pros
 * 1) No-learning curve
 * 2) Comes with CRA
 *
 * Styled Components
 * - Pros
 * 1) No unused CSS
 * 2) Easier deletion / copy-paste of styles
 * 3) Allows for snapshot testing your styles
 *
 * - Cons
 * 1) HTML / Dom tree becomes hard to read( inline styles )
 * 2) Code completion is not so good
 *
 * ============================================
 * Why should we use SCSS
 * - Nested selector( Eg: media queries )
 * 1) However do not deeply nest classes / elements => hard to maintain
 * - Partials
 * - Extending styles
 */
// import "./css/Style.css";
import "./scss/Style.scss";
import Header from "./components/Header";

export default function App() {
  const bodyText = "This is my body text";

  return (
    <>
      {/* [Warning] Try your best not to use inline-styling */}
      <p style={{ color: "red" }}>React styling relevant things</p>

      {/* Good Practice */}
      <h1 className="header">This is a header styling with className</h1>

      {/* Conditional Rendering */}
      <div className={bodyText.length > 5 ? "main" : null}>{bodyText}</div>

      {/* Import a component */}
      <Header headerText={"I am the header text"} />
    </>
  );
}
