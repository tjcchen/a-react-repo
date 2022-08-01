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
  Navigate
} from 'react-router-dom';
import AppHeader from './router/AppHeader';
import Login from './router/Login';
import Dashboard from './router/Dashboard';

export default function App() {
  return (
    <>
      <Router>
        <AppHeader />
        <Routes>
          <Route path="/login" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
          <Navigate to="/login" />
        </Routes>
      </Router>
    </>
  );
}
