const EXPRESS = require('express');

const WALLET = EXPRESS();

WALLET.get('/', function (req, res) {
    res.send('WALLET!');
});

module.exports = WALLET;