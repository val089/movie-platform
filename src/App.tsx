import { Routes, Route, Link } from 'react-router-dom';

import { LoginPage } from 'views/LoginPage';
import { HomePage } from 'views/HomePage';
import { PlayerPage } from 'views/PlayerPage';
import { ProtectedRoute } from 'components/ProtectedRoute';

export const App = () => {
  return (
    <>
      <nav>
        <Link to="/login">Login</Link>
        <Link to="/home">Home</Link>
        <Link to="/player">Player</Link>
      </nav>

      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route element={<ProtectedRoute />}>
          <Route path="home" element={<HomePage />} />
          <Route path="player" element={<PlayerPage />} />
        </Route>
      </Routes>
    </>
  );
};
