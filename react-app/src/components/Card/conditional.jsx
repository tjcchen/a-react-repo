/**
 * A Conditional Rendering Component
 * - Conditional rendering of content & styling
 * - Ternary
 * - &&, watch out with .map
 * - Enum
 */

export default function Conditional() {
  const user = {
    name: "Andy",
    isAuthenticated: false,
  };
  const { name, isAuthenticated } = user;

  return (
    <>
      <h1>App</h1>
      <p>Welcome, {isAuthenticated ? name : "please log in"}</p>
    </>
  );
}
