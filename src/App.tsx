import { LoginPage } from 'views/LoginPage';
import { useAuth } from 'hooks/useAuth';
import { HomeScreen } from 'views/HomeScreen';

export const App = () => {
  const { user } = useAuth();

  return user ? <HomeScreen /> : <LoginPage />;
};
