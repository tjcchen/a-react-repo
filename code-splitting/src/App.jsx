import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./pages/Header/Header";
import Dashboard from "./pages/Dashboard/Dashboard";
import Chart from "./pages/Chart/Chart";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/chart" element={<Chart />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
