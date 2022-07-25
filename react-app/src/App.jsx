import Card from "./components/Card/card";
import Conditional from "./components/Card/conditional";
import Event from "./components/Card/event";
import Counter from "./components/Card/state";

function App() {
  return (
    <>
      <Card />
      <hr/>
      <Event />
      <hr/>
      <Counter />
      <hr/>
      <Conditional />
    </>
  );
}

export default App;
