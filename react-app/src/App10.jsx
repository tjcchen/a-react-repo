/**
 * Styled Components
 * - Add CSS by styling the components( component could in this case be just a simple '<p>' )
 *
 * - npm install styled-components
 * - vscode-styled-components (plugin for VSCode)
 *
 * - Simple styling
 * - Conditional styling (based on props)
 * - Extending styles
 * - Media Query / onHover
 * 
 * ======================================
 * Styling recommendations
 * - Prevent 'weird' styling decisions; keep it simple;
 * 1) Abstractions and not-traditional decisions comes at a cost
 * 
 * - Try a CSS Reset(eg: meyer) / Normalize.css
 * 1) Opinionated yet effective for consistent styling across browsers
 * 
 * - Use CSS variables for colors
 * - Keep your CSS selectors short
 * 1) .thisClass
 * 2) .header .nav p .thatClass
 * 
 */
import styled from "styled-components";

export default function App() {
  return (
    <>
      <StyledButton primary>I want this to be red</StyledButton>
      <StyledLargeButton>I am a large button</StyledLargeButton>
    </>
  );
}

const StyledButton = styled.button`
  background-color: red;
  color: ${(props) => (props.primary ? "white" : "gray")};

  &:hover {
    background-color: purple;
  }

  @media (max-width: 500px) {
    background-color: yellow;
  }
`;

const StyledLargeButton = styled(StyledButton)`
  padding: 1em;
`;
