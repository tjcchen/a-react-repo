import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import Memo from "./components/Memo";
import UseMemoDemo from "./components/UseMemoDemo";

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  // Every time the user clicks on the button, the state of count1 changes causing the App to
  // rerender both counters which is known as unnecessary re-render.
  // However, we expect only the counter1 to be rerendered since nothing has changed with the counter2.
  // In reality, both counters get rerendered.
  // [Note] React.memo is used to address this problem.
  const increaseCounter1 = () => {
    setCount1((prevState) => prevState + 1);
  };

  return (
    <>
      <h3> React.memo vs useMemo vs useCallback </h3>
      <button onClick={increaseCounter1}>Increase counter 1</button>
      <Counter value={count1}>Counter 1</Counter>
      <Counter value={count2}>Counter 2</Counter>
      <hr />
      <Memo />
      <hr />
      <UseMemoDemo msg={"hello, my friend!"} />
    </>
  );
}

export default App;
