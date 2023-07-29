import { useState, useEffect } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import initializeFirebase from '../components/Login/Login/Firebase/firebase.init';
import { useNavigate } from 'react-router-dom';

// initialize firebase app
initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);

    const navigate = useNavigate();
    
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const registerUser = (email, password, name) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
                const newUser = { email, displayName: name };
                console.log(newUser)
                setUser(newUser);
                // save user to db
                saveUser(email, name, 'POST');
                // send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {

                }).catch((error) => {

                });
                navigate('/layout');
            })
            .catch((error) => {
                setAuthError(error.message);
                console.log(error);
            })
            .finally(() => setIsLoading(false));
    }

    const loginUser = (email, password) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                navigate('/layout');
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    const signInWithGoogle = () => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                navigate('/layout');
                const user = result.user;
                saveUser(user.email, user.displayName, 'PUT');
                setAuthError('');
            }).catch((error) => {
                setAuthError(error.message);
            }).finally(() => setIsLoading(false));
    }

    // observer user state
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])

    useEffect(() => {
        fetch(`https://fetch-bills-server.onrender.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user?.email]);

    const logout = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false));
    }

    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('https://fetch-bills-server.onrender.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }

    return {
        user,
        admin,
        isLoading,
        authError,
        registerUser,
        loginUser,
        signInWithGoogle,
        logout,
    }
}

export default useFirebase;