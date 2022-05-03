import { useContext, useState, createContext } from 'react';
import { api, endpoints } from 'api';
import type { LoginFormFields } from '../views/LoginPage/index';

interface User {
  Username: string;
  Password: string;
  Device: {
    Name: string;
    PlatformCode: string;
    FirebaseToken: string;
    DpiCode: string;
  };
}

export interface AuthCtx {
  user: User | null;
  signIn: ({ username, password }: LoginFormFields) => void;
  signOut: () => void;
  goWithoutLogin: () => void;
}

const AuthContext = createContext<AuthCtx | null>(null);

interface AuthProviderProps {
  children?: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState(null);

  const signIn = async ({ username, password }: LoginFormFields) => {
    try {
      const response = await api.post(endpoints.login, {
        username,
        password,
      });
      setUser(response.data);
      localStorage.setItem('token', response.data.AuthorizationToken.Token);
    } catch (e) {
      console.log('error');
    }
  };

  const goWithoutLogin = async () => {
    try {
      const response = await api.post(endpoints.login, {
        Device: {
          PlatformCode: 'WEB',
          Name: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
        },
      });
      setUser(response.data);
      localStorage.setItem('token', response.data.AuthorizationToken.Token);
    } catch (e) {
      console.log('error');
    }
  };

  const signOut = () => {
    setUser(null);
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signOut, goWithoutLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const auth = useContext(AuthContext);

  if (!auth) {
    throw Error('useAuth needs to be used inside AuthContext');
  }

  return auth;
};
