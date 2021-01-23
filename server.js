const EXPRESS = require('express');
const V_HOST = require('vhost');

const APP = EXPRESS();

const WALLET = require('./apps/wallet/wallet-server.js');
const VALIDATOR = require('./apps/validator/validator-server.js');

APP.use(V_HOST('wallet.localhost', WALLET));
APP.use(V_HOST('validator.localhost', VALIDATOR));

APP.listen(3000);