/**
 * React Router Hooks
 * - useHistory
 *   history.push()
 *   with and without state
 *   vs <link />
 * - history.goBack()
 * - useParams
 *   Destructure from URL
 */

import {
  BrowserRouter as Router,
  Route,
  Routes,
  // Navigate,
} from "react-router-dom";
import AppHeader from "./router/AppHeader";
import Login from "./router/Login";
import Dashboard from "./router/Dashboard";

export default function App() {
  return (
    <>
      <Router>
        <AppHeader />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* <Route path="/login" element={<Navigate />} /> */}
        </Routes>
      </Router>
    </>
  );
}
