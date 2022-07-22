/**
 * Components
 * - Reusable piece of code
 * - Function components
 */

export default function Card() {
  return (
    <div>
      <img
        style={{ width: "16rem" }}
        src="https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80"
        alt="animal"
      />
      <div>
        <p>Beau chat</p>
        <a href="/cats">More infomation</a>
      </div>
    </div>
  );
}
