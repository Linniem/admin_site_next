import '../../types/api.js';
import * as utils from '../../server/utils.js';

/** @type {NextHandler} */
export default async function handler(req, res) {
    switch (req.method) {
        case 'POST':
            await post(req, res);
            break;

        default:
            res.status(404).end();
    }
}

/** @type {NextHandler} */
async function post(req, res) {
    /**
     * @typedef {Object} LoginRequest
     * @property {string|undefined} account
     * @property {string|undefined} password
     */
    /** @type {LoginRequest} */
    let reqBody;

    try {
        reqBody = JSON.parse(req.body);
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: 'request body can not parsed to JSON' });
        return;
    }

    if (reqBody.account === undefined || reqBody.password === undefined) {
        res.status(400).json({ error: 'request body not valid' });
        return;
    }

    // valid account password & get account information
    if (reqBody.account !== 'admin') {
        res.status(400).json({ error: 'login failed' });
        return;
    }
    let userName = reqBody.account;

    let token = '';
    try {
        token = await utils.signJwt(reqBody.account);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'jwt token signed error' });
        return;
    }

    res.status(200).json({ token, userName });
}
