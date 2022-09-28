import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./pages/Header/Header";
import Dashboard from "./pages/Dashboard/Dashboard";
// import Chart from "./pages/Chart/Chart";

import { lazy, Suspense } from "react";

// use React.lazy to lazy loading Chart component
const Chart = lazy(() => import("./pages/Chart/Chart"));

function App() {
  return (
    <>
      <Router>
        <Header />
        <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route exact path="/chart" element={<Chart />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
