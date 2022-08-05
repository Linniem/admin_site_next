import Router from 'next/router';
import {
    createContext,
    useEffect,
    useReducer,
    useContext,
    useState,
} from 'react';
import { getToken, getUserName } from '../client/localStorage.js';

const LoginInfoContext = createContext({
    userName: '',
});
const LoginInfoDispatchContext = createContext(() => {});

export function LoginInfoProvider({ children }) {
    const [loginInfo, dispatch] = useReducer(loginInfoReducer, {
        userName: '',
    });

    const [isLogin, setIsLogin] = useState(false);

    useEffect(() => {
        const token = getToken();
        if (!token && location.pathname != '/login') {
            Router.push('/login');
            return;
        }

        // TODO: add token validation with server

        const userName = getUserName();
        if (userName) {
            dispatch({
                type: 'login',
                userName,
            });
        }
        setIsLogin(true);
    }, []);

    return (
        <LoginInfoContext.Provider value={loginInfo}>
            <LoginInfoDispatchContext.Provider value={dispatch}>
                {isLogin ? children : ''}
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
