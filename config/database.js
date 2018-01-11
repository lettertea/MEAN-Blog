const crypto = require('crypto').randomBytes(256).toString('hex');

module.exports = {
    uri: process.env.databaseUri,
    secret: crypto,
    db: process.env.databaseName
}
