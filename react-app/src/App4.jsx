/**
 * React Router Hooks
 * - useHistory - [useNavigate]
 *   history.push() - navigate('url', params)
 *   with and without state - [PASS DATA WITH NAVIGATE AND HISTORY]
 *   vs <link /> [RECOMMENDED]
 * - history.goBack() => navigate(-1)
 * - useParams
 *   Destructure from URL
 */

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import AppHeader from "./router/AppHeader";
import Login from "./router/Login";
import Dashboard from "./router/Dashboard";
import Tweet from "./router/Tweet";
import About from './router/About';

export default function App() {
  return (
    <>
      <Router>
        <AppHeader />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/tweet/:tweetId" element={<Tweet />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Navigate />} />
        </Routes>
      </Router>
    </>
  );
}
