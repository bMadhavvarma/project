import React, { createContext, useState, useEffect } from 'react';
import { getlocalStorage, setlocalStorage } from '../utils/LocalStorage';

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const [userData, setUserData] = useState({ employees: [], admin: null });
  
    useEffect(() => {
      setlocalStorage()
      const { employees = [], admin = null } = getlocalStorage();
      setUserData({ employees, admin });
    }, []);
  
    return (
      <AuthContext.Provider value={userData}>
        {children}
      </AuthContext.Provider>
    );
  };
  
  export default AuthProvider;
  
