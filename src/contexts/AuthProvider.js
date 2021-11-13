import React, { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';

export const authContext = createContext(null);
const AuthProvider = ({children}) => {
    const auth = useFirebase();
    return (
        <authContext.Provider value={auth}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;