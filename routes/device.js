var express = require('express');
var router = express.Router();

const jsonText = '{"connected_devices" : [ ' +
    '{' +
    '"id": 1, ' +
    '"name": "Bathroom_heater", ' +
    '"properties": [  { "id": "temperature", "value": 19, "timestamp": 1520730364 }, { "id": "active", "value": true, "timestamp": 1520730364 } ] ' +
    '},' +
    '{' +
    '"id": 2, ' +
    '"name": "Bedroom_heater", ' +
    '"properties": [  { "id": "temperature", "value": 19, "timestamp": 1520730364 }, { "id": "active", "value": true, "timestamp": 1520730364 } ] ' +
    '},' +
    '{' +
    '"id": 3, ' +
    '"name": "Living_heater", ' +
    '"properties": [  { "id": "temperature", "value": 19, "timestamp": 1520730364 }, { "id": "active", "value": true, "timestamp": 1520730364 } ] ' +
    '}' +
    ']}'

/* GET devices page. */
router.get('/', function(req, res, next) {

  const devices = JSON.parse(jsonText).connected_devices;
  res.render('device', { title: 'Devices', devices: devices});
});

module.exports = router;
