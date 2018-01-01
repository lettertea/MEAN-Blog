const crypto = require('crypto').randomBytes(256).toString('hex');

module.exports = {
    uri: 'mongodb://deadpools:Idontknow123@ds135747.mlab.com:35747/mea2n-blog',
    secret: crypto,
    db: process.env.databaseName
}
