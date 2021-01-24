// Native
const FS = require('fs');
const PAHT = require('path');
const HTTPS = require('https');

// Libraries
const EXPRESS = require('express');
const V_HOST = require('vhost');

// ....
// Server.js
// ....

const SSL_KEY = FS.readFileSync('./_certs/localhost.key');
const SSL_CERT = FS.readFileSync('./_certs/localhost.crt');

const APP = EXPRESS();

const WALLET = require('./apps/wallet/wallet-server.js');
const VALIDATOR = require('./apps/validator/validator-server.js');

APP.use(V_HOST('wallet.localhost', WALLET));
APP.use(V_HOST('validator.localhost', VALIDATOR));

const HTTP_SERVER = HTTPS.createServer({
    key: SSL_KEY,
    cert: SSL_CERT
}, APP);

HTTP_SERVER.listen(3000);