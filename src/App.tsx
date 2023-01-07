import { Routes, Route } from 'react-router-dom';

import { Header } from 'views/Header';
import { LoginPage } from 'views/LoginPage';
import { HomePage } from 'views/HomePage';
import { PlayerPage } from 'views/PlayerPage';
import { ProtectedRoute } from 'components/ProtectedRoute';
import { useAuth } from 'hooks/useAuth';

export const App = () => {
  const { isAuthenticated } = useAuth();
  return (
    <>
      {isAuthenticated && <Header />}
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
