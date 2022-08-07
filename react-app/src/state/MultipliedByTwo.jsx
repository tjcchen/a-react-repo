/**
 * Props
 * - Props = properties
 * - Great way to share data and functions between components
 *
 * - Lifting state up
 * - Prop Drilling
 * 
 * Passing a props from parent component
 *
 */

export default function MultipliedByTwo({ inputValue = 0 }) {
  return (
    <>
      <p>Multiplied number: {inputValue * 2}</p>
    </>
  );
}
