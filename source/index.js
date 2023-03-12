'use strict'
const config  = require('../services').config;
const libwt   = require('../services').wjs;
const express = require('../services').express;
const http    = require('../services').http;
const libIO   = require('../services').io;

const app     = express();
app.listen();
const IOserver  = http.createServer(app);
const io = libIO(IOserver);

config.config.options.app = app;
config.config.options.io  = io;

//iniciamos web terminal
const wt = new libwt(config.config.options);

IOserver.listen(config.config.options.port);
