const crypto = require('crypto').randomBytes(256).toString('hex');

module.exports = {
    uri: mongodb:'//deadpools:idontknow@ds135747.mlab.com:35747/mea2n-blog',
    secret: crypto,
    db: 'mea2n-blog'
}
