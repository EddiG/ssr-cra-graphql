require = require('@std/esm')(module, { cjs: true, esm: 'js' });
module.exports = require('./server').default;
