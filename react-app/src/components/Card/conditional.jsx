/**
 * A Conditional Rendering Component
 * - Conditional rendering of content & styling
 * - Ternary
 * - &&, watch out with .map
 * - Enum
 */
import "./conditional.css";

export default function Conditional() {
  const welcomeText = {
    admin: "Hi admin",
    manager: "Hi manager",
    customer: "Welcome customer",
    guest: "Welcome guest",
  };

  const user = {
    // admin, manager, customer, guest
    role: "manager",
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
          ? welcomeText.admin
          : role === "manager"
          ? welcomeText.manager
          : role === "customer" && welcomeText.customer}
      </p>
      <p>{welcomeText[role]}</p>
      {/* && equals to if */}
      {!isAuthenticated && <button type="button">Log in</button>}
    </>
  );
}
