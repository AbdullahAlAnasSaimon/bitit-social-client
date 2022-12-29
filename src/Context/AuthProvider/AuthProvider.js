import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateEmail, updateProfile } from 'firebase/auth';
import app from '../../Firebase/firebase.config';


const auth = getAuth(app);
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  
  const googleSignIn = provider => {
      setLoading(true);
      return signInWithPopup(auth, provider);
    }

    const userSignUp = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
    }

    const userLogIn = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUserInfo = (profile) => {
      setLoading(true);
      return updateProfile(auth.currentUser, profile);
    }

    const updateUserEmail = (emailUp) =>{
      return updateEmail(auth.currentUser, emailUp);
    }
    
    const logOut = () => {
      setLoading(true);
      return signOut(auth);
    }
    
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        console.log(currentUser);
        setUser(currentUser);
        setLoading(false);
      })
      return () => unsubscribe();
    }, []);
    
    
    const authInfo = {
    user,
    googleSignIn,
    setUser,
    userSignUp,
    userLogIn,
    updateUserInfo,
    updateUserEmail,
    logOut,
    loading,
    setLoading
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;