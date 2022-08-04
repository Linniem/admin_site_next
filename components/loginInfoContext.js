import Router from 'next/router';
import { createContext, useEffect, useReducer, useContext } from 'react';
import { getToken, getUserName } from '../client/localStorage.js';

const LoginInfoContext = createContext({
    userName: '',
});
const LoginInfoDispatchContext = createContext(() => {});

export function LoginInfoProvider({ children }) {
    const [loginInfo, dispatch] = useReducer(loginInfoReducer, {
        userName: '',
    });

    useEffect(() => {
        const token = getToken();
        if (token === null && location.pathname != '/login') {
            Router.push('/login');
            return;
        }

        const userName = getUserName();
        if (userName) {
            dispatch({
                type: 'login',
                userName,
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

export function useLoginInfo() {
    return useContext(LoginInfoContext);
}

export function useLoginInfoDispatch() {
    return useContext(LoginInfoDispatchContext);
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
