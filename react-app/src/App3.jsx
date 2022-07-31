/**
 * Entry of App3
 */

// import Form from "./components/Card/form";
// import FileUpload from "./components/FileUpload";
import ComponentA from "./components/Module/ComponentA";
import ComponentB from "./components/Module/ComponentB";

function App() {
  return (
    <>
      {/* form fetching data */}
      {/* <Form /> */}

      {/* uploading an image */}
      {/* <FileUpload /> */}

      {/* custom hook */}
      <ComponentA />
      <ComponentB />
    </>
  );
}

export default App;
