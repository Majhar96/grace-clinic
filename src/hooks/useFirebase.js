import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../components/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [users, setUsers] = useState({});

    const auth = getAuth();



    const signInUsingGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUsers(result.users)
            })

    }



    // user state change 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setUsers(users)
            }
            else {
                setUsers({})
            }
        });
        return () => unsubscribe;

    }, [])

    const logOut = () => {
        signOut(auth)
            .then(() => { });
    }

    return {
        users,
        signInUsingGoogle,
        logOut
    }
}

export default useFirebase;

