const PATH = require('path');

// Third Party
const EXPRESS = require('express');

const WALLET = EXPRESS();

const WALLET_ROOT = "./apps/wallet";

const WALLET_INDEX = PATH.join(__dirname, '../apps/wallet/index.html');

WALLET.use(EXPRESS.static('./apps/wallet/dist'));

WALLET.get('/', function (req, res) {
    
    console.log("wallet-root");
    
    res.sendFile(WALLET_INDEX);
});

module.exports = WALLET;