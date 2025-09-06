import { createContext, useContext, useState, useEffect } from 'react';
import { ref, set, get } from 'firebase/database';
import { database } from '../firebase/config';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      const userData = JSON.parse(savedUser);
      setUser(userData);
      setIsAdmin(userData.phone === '9921759982');
    }
    setLoading(false);
  }, []);

  const registerUser = async (userData) => {
    try {
      const userRef = ref(database, `users/${userData.phone}`);
      await set(userRef, {
        ...userData,
        createdAt: new Date().toISOString()
      });
      
      localStorage.setItem('user', JSON.stringify(userData));
      setUser(userData);
      setIsAdmin(userData.phone === '9921759982');
      return true;
    } catch (error) {
      console.error('Error registering user:', error);
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
    setIsAdmin(false);
  };

  return (
    <AuthContext.Provider value={{
      user,
      isAdmin,
      loading,
      registerUser,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  );
};