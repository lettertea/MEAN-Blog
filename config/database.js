const crypto = require('crypto').randomBytes(256).toString('hex');

module.exports = {
    uri: process.env.db,
    secret: crypto,
    db: process.env.databaseName
}
