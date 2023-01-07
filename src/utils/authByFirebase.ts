import axios from 'axios';

const authenticate = async (
  mode: 'signInWithPassword' | 'signUp',
  email: string,
  password: string
) => {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${process.env.REACT_APP_FIREBASE_API_KEY}`;

  const response = await axios.post(url, {
    email,
    password,
    returnSecureToken: true,
  });

  const token = response.data.idToken;

  return token;
};

export const createUser = (email: string, password: string) => {
  return authenticate('signUp', email, password);
};

export const login = (email: string, password: string) => {
  return authenticate('signInWithPassword', email, password);
};
