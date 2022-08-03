import '../types/api.js';

import * as jwt from 'jsonwebtoken';

const secret = 'sssssssssssss';

/**
 * @param {string} account
 * @returns {Promise<string>} token
 */
export async function signJwt(account) {
    return new Promise((resolve, reject) => {
        jwt.sign({}, secret, { subject: account }, (err, token) => {
            if (err !== null) {
                reject(err);
            }
            resolve(token);
        });
    });
}

/**
 * @param {string} token
 * @returns {Promise<string>} account
 */
export async function verifyJwt(token) {
    return new Promise((resolve, reject) => {
        jwt.verify(token, secret, {}, (err, decoded) => {
            if (err !== null) {
                reject(err);
            }

            resolve(decoded.sub);
        });
    });
}