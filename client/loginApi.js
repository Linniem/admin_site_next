/**
 * @typedef LoginInfo
 * @property {string} token
 * @property {string} userName
 */
/**
 * @param {string} account
 * @param {string} password
 * @returns {Promise<LoginInfo>}
 */
export async function login(account, password) {
    try {
        const res = await fetch('/api/login', {
            method: 'POST',
            body: JSON.stringify({ account, password }),
        });
        if (res.ok) {
            /** @type {LoginInfo} */
            const loginInfo = await res.json();
            return loginInfo;
        }
    } catch (error) {
        throw 'login failed';
    }

    throw 'login failed';
}
