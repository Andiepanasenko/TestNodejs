
'use strict';


const express = require('express');
const app = express();
const HOST = process.env.HOST || '0.0.0.0';
const PORT = process.env.PORT || 8082;
const LOGFILE = process.env.LOGFILE || 'log.txt';
var counter = 0;


var fs = require('fs');

function logVisitors(ip) {
  let currentDate = new Date();
  counter++;
  let log = counter + '\t' + currentDate + '\t' + ip + '\r';
  fs.appendFile(LOGFILE, log, function (err) {
  if (err) return console.log(err);
  console.log(log);
});
}

app.get('/', (req, res) => {
  res.send('Hello World');
  logVisitors(req.ip);

});

app.listen(PORT, HOST);
console.log(`running on http://${HOST}:${PORT}`);
