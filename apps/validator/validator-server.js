const EXPRESS = require('express');

const VALIDATOR = EXPRESS();

VALIDATOR.get('/', function (req, res) {
    res.send('VALIDATOR!');
});

module.exports = VALIDATOR;