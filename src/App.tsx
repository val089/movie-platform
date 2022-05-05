import { Routes, Route, Link } from 'react-router-dom';

import { LoginPage } from 'views/LoginPage';
import { HomePage } from 'views/HomePage';
import { PlayerPage } from 'views/PlayerPage';
import { ProtectedRoute } from 'components/ProtectedRoute';

export const App = () => {
  return (
    <>
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/">Login</Link>
      </nav>

      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route element={<ProtectedRoute />}>
          <Route path="home" element={<HomePage />} />
          <Route path="player/:movieId" element={<PlayerPage />} />
        </Route>
      </Routes>
    </>
  );
};
