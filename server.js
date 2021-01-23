const EXPRESS = require('express');
const V_HOST = require('vhost');

const APP = EXPRESS();

const WALLET = require('./apps/wallet/wallet-server.js');

APP.listen(3000);