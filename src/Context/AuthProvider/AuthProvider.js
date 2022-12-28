import React, { createContext, useState } from 'react';
import {getAuth, signInWithPopup} from 'firebase/auth';
import app from '../../Firebase/firebase.config';


const auth = getAuth(app);
export const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);

  const googleSignIn = provider =>{
    signInWithPopup(auth, provider);
  }
  
  const authInfo = {user};

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;