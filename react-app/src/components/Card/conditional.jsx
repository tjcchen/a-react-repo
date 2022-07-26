/**
 * A Conditional Rendering Component
 * - Conditional rendering of content & styling
 * - Ternary
 * - &&, watch out with .map
 * - Enum
 */
import "./conditional.css";

export default function Conditional() {
  const user = {
    // admin, manager, customer, guest
    role: "customer",
    name: "Andy",
    isAuthenticated: true,
  };
  const { role, name, isAuthenticated } = user;

  return (
    <>
      <h1>App</h1>
      <p
        className={isAuthenticated ? "welcomeTextAuthenticated" : "welcomeText"}
      >
        Welcome, {isAuthenticated ? name : "please log in"}
      </p>
      <p>
        {role === "admin"
          ? "Hi Admin"
          : role === "manager"
          ? "Hi Manager"
          : role === "customer" && "welcome customer"}
      </p>
      {/* && equals to if */}
      {!isAuthenticated && <button type="button">Log in</button>}
    </>
  );
}
