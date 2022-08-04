import Router from 'next/router';
import { createContext, useEffect, useReducer } from 'react';
import { getToken, getUserName } from '../client/localStorage.js';

export const LoginInfoContext = createContext(null);
export const LoginInfoDispatchContext = createContext(null);

export function LoginInfoProvider({ children }) {
    const [loginInfo, dispatch] = useReducer(loginInfoReducer, {
        userName: '',
    });

    useEffect(() => {
        const token = getToken();
        if (token === null && location.pathname != '/login') {
            Router.push('/login');
        }

        const userName = getUserName();
        if (userName) {
            dispatch({
                type: 'login',
                userName: userName,
            });
        }
    }, []);

    return (
        <LoginInfoContext.Provider value={loginInfo}>
            <LoginInfoDispatchContext.Provider value={dispatch}>
                {children}
            </LoginInfoDispatchContext.Provider>
        </LoginInfoContext.Provider>
    );
}

function loginInfoReducer(loginInfo, action) {
    switch (action.type) {
        case 'login': {
            return { ...loginInfo, userName: action.userName };
        }
        case 'logout': {
            return null;
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}
