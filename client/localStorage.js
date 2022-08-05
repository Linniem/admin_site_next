const LS_KEY_TOKEN = 'token';
const LS_KEY_USER_NAME = 'userName';

const set = (key, value) => localStorage.setItem(key, value);
const get = (key) => localStorage.getItem(key);
const remove = (key) => localStorage.removeItem(key);

export const setToken = (token) => set(LS_KEY_TOKEN, token);
export const getToken = () => get(LS_KEY_TOKEN);
export const removeToken = () => remove(LS_KEY_TOKEN);

export const setUserName = (userName) => set(LS_KEY_USER_NAME, userName);
export const getUserName = () => get(LS_KEY_USER_NAME);
export const removeUserName = () => remove(LS_KEY_USER_NAME);
