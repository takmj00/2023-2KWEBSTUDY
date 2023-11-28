const util = require('util');
const crypto = require('crypto');
const randomBytes = util.promisify(crypto.randomBytes);
const pbkdf2 = util.promisify(crypto.pbkdf2); //async화

const encrypt = async text => {
    const ALGO = 'sha512';
    const KEY_LEN = 64;
    const digest = await pbkdf2(text, '', 1, KEY_LEN, ALGO);
console.log(`${text} | ${digest.toString('base64')}`);
};
(async () => await encrypt('samplepassword'))();

//pbkdf2(password, salt, iteration, key-length, algorithm)






