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
