import React, { createContext, useState, useEffect, useContext } from 'react';
const url_base = 'https://capstone2-c2-hervekongo96.onrender.com/';
const url_login = 'auth/login';

const AuthContext = createContext();


export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user'));
    if (token && user) {
      setToken(token);
      setUser(user);
    }
  }, []);

  useEffect(() => {
    if (token && user) {
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    }
  }, [token, user]);

  const login = async (data) => {
    try {
        const response = await fetch(`${url_base}${url_login}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
    
        if (!response.status === 200) {
            throw new Error(`Erreur HTTP: ${response.status}`);
        } 
            const dataresponse = await response.json();
            setToken(dataresponse.token);
            setUser(dataresponse.user);
      } catch (error) {
        console.error('Il y a eu un problème avec votre fetch opération: ', error);
      }
  };

  const logout = () => {
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ token, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}