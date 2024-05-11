import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile, signInWithPopup, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import app from "../firebase/firebase.config";


export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
 


    // social login
    const provider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const googleLogin = ()=>{
        return signInWithPopup(auth, provider)
    }

    const githubLogin = ()=>{
        return signInWithPopup(auth, githubProvider)
    }

    const singIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const createUser = (email, password) => {
        setLoading(true);

        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName:name,
            photoURL: photo
        })

    }

    const logOut = () => {
        setLoading(true);

        return signOut(auth);
    }

    useEffect(() => {
        const unSubscibe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);

        });

        return () => {
            unSubscibe();
        }
    }, [])


    const authInfo = {
        user,
        loading,
        createUser,
        googleLogin,
        githubLogin,
        updateUserProfile,
        logOut,
        singIn,
    
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;