import Card from "./components/Card/card";
import Conditional from "./components/Card/conditional";
import Event from "./components/Card/event";
import Counter from "./components/Card/state";
import Form from "./components/Card/form";
import './App.css';

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
      <hr/>
      <Form />
    </>
  );
}

export default App;
