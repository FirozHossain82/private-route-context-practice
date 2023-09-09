import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config.js';

 
 export  const AuthContext = createContext(null);
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();


const AuthProviders = ({children}) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);


  const createUser = (email, password)=>{
    return createUserWithEmailAndPassword(auth, email,password);
  }

  const signIn = (email, password) =>{
    return signInWithEmailAndPassword(auth,email, password);
  }

  const googleSignIn = () =>{
    return signInWithPopup(auth, googleProvider);
  }

  useEffect(()=>{
   const unsubscribe= onAuthStateChanged(auth, currentUser =>{
        console.log('auth state change', currentUser)
        setUser(currentUser);
        setLoading(false);
    });
    return () =>{
        unsubscribe();
    }
  },[])

  const logOut = () =>{
    return signOut(auth);
  }


  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    googleSignIn,
    logOut
  }
    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;