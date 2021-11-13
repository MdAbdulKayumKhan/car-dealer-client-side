import React, { useEffect, useState } from 'react';
import initializeFirebase from '../components/Login/Firebase/firebase.init';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, updateProfile, signOut } from "firebase/auth";

initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoadin] = useState(true);
    const [authError, setAuthError] = useState('');
    const [isAdmin, setIsAdmin] = useState(false);

    const auth = getAuth();


    // create register user 
    const registerUser = (email, password, name, history) => {
        setIsLoadin(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
                const newUser = {email, displayName: name}
                setUser(newUser);
                // save user to the database
                saveUser(email, name, 'POST')
                console.log(userCredential.user);
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                    
                    setAuthError('');

                }).catch((error) => {
                    
                    setAuthError(error.message);
                });
                history.replace('/');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoadin(false));

    }

    // login user 
    const loginUser = (email, password, history, location) => {
        setIsLoadin(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const distination = location?.state?.from || '/';
                history.replace(distination);
                setAuthError(''); 
                const user = userCredential.user;
                // console.log(user)
                // ...
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(()=> setIsLoadin(false));
    }

    // observed user state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setIsLoadin(false)
        });
        return () => unsubscribe;
    }, [])

    // admin fetch
    useEffect(()=>{
        fetch(`https://safe-brook-81042.herokuapp.com/users/${user.email}`)
        .then(res => res.json())
        .then(data => {
            setIsAdmin(data.admin)
        })
    }, [user?.email])

    // logout 
    const logOut = () => {
        setIsLoadin(true);
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
        .finally(()=> setIsLoadin(false));
    }

    // user data save into DB
    const saveUser = (email, displayName, method) =>{
        const user = {email, displayName};
        fetch('https://safe-brook-81042.herokuapp.com/users', {
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
        isAdmin,
        registerUser,
        loginUser,
        logOut,
        isLoading,
        authError
    }

};

export default useFirebase;