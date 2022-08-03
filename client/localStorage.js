const LS_KEY_TOKEN = 'token';
const LS_KEY_USER_NAME = 'userName';

export function setToken(token) {
    localStorage.setItem(LS_KEY_TOKEN, token);
}

export function getToken() {
    return localStorage.getItem(LS_KEY_TOKEN);
}

export function setUserName(userName) {
    localStorage.setItem(LS_KEY_USER_NAME, userName);
}

export function getUserName() {
    return localStorage.getItem(LS_KEY_USER_NAME);
}
