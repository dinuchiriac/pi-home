var config = require('./config_' + (process.env.ENV || 'dev') + '.js'),
  adfruit_dht = require('./libs/adfruit/adfruit').dht;

adfruit_dht.init(22, 4, function(err, data) {
  "use strict";
  if (err) console.log(err, 'err');
  console.log(data, 'data');
});