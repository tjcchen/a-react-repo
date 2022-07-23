/**
 * User Events
 * - onClick
 * - onChange
 */

export default function Event() {
  const print = () => {
    console.log("print into to the console");
  };

  return (
    <>
      <button onClick={() => console.log("button was clicked")}>
        Click Me!
      </button>
      <button onClick={() => print()}>Print</button>
      <form>
        <input type="text" onChange={(e) => console.log(e.target.value)} />
      </form>
    </>
  );
}
