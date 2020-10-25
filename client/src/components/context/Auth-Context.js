import React, { useState } from 'react';

export const AuthContext = React.createContext({
    isAuth: false,
    login: () => {}
});

const AuthContextProvider  = props => {
    const [authState, setAuthState] = useState(false);
    const handleLogin = () => {
        const token = sessionStorage.getItem('access__token');
        setAuthState(token);
    };

    return (
        <AuthContext.Provider value={{login: handleLogin, isAuth: authState}}>
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;