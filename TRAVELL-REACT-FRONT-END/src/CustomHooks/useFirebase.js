import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import firebaseInitialization from '../FirebaseInfo/Firebase.init';

firebaseInitialization();
const useFirebase = () => {
    
    // Take a state for storing the user in the state
    const [user, setUser] = useState({});

    // Take auth provider
    const auth = getAuth();

    // Make provider here
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    // Handle google signin using firebase api
    const handleGoogleSignin = () => {
          return signInWithPopup(auth, googleProvider);
    }

    // Handle github signin using firebase api
    const handleGithubSignin = () => {
          return signInWithPopup(auth, githubProvider);
    }


    // Handle signout
       const handleSignOut = () => {
            signOut(auth)
            .then(() => {
                setUser({});
            })
        }

    // Use effect for handle changing user 
    useEffect( () => {
        onAuthStateChanged(auth, (user) => {
            if(user){
               setUser(user);
            }
        });
    }, [])

    return {
        handleGoogleSignin,
        handleGithubSignin,
        handleSignOut,
        user
        
    }
};

export default useFirebase;