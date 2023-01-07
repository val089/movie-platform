import { useContext, useState, createContext } from 'react';

export interface AuthCtx {
  token: string | null;
  isAuthenticated: boolean;
  authenticate: (token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthCtx | null>(null);

interface AuthProviderProps {
  children?: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [authToken, setAuthToken] = useState('');

  const authenticate = (token: string) => {
    setAuthToken(token);
    localStorage.setItem('token', token);
  };

  const logout = () => {
    setAuthToken('');
    localStorage.removeItem('token');
  };

  const value = {
    token: authToken,
    isAuthenticated: !!authToken,
    authenticate,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const auth = useContext(AuthContext);

  if (!auth) {
    throw Error('useAuth needs to be used inside AuthContext');
  }

  return auth;
};

// AUTH BY TheMovieDB
// const signIn = async ({ username, password }: LoginFormFields) => {
//   try {
//     const responseToken = await api.get(endpoints.createToken);
//     const request_token = responseToken.data.request_token;
//     localStorage.setItem('token', request_token);

//     if (request_token) {
//       const responseAuth = await api.post(endpoints.login, {
//         username,
//         password,
//         request_token,
//       });

//       if (responseAuth.data.success) {
//         setAuthToken(request_token);
//         // window.location.replace(
//         //   `https://www.themoviedb.org/authenticate/${responseAuth.data.request_token}?redirect_to=${window.location.href}`
//         // );
//         // const session = await api.post(endpoints.createSession);
//         // if (session) {
//         //   console.log(session);
//         // }
//       }
//     }
//   } catch (error: any) {
//     console.log(error.response.data.status_message);
//   }
// };
