import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';

/*
https://www.google.com/search?q=protected+route+react&oq=protected+rout&aqs=chrome.1.0i512l2j69i57j0i512j0i22i30j69i61l3.4752j0j1&sourceid=chrome&ie=UTF-8#fpstate=ive&vld=cid:b0d097f7,vid:2k8NleFjG7I

https://medium.com/@dennisivy/creating-protected-routes-with-react-router-v6-2c4bbaf7bc1c
 */

export const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <Outlet /> : <Navigate to="/" replace />;
};
